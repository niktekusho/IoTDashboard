const { DeviceInfo, SensorSpec } = require('device-info');

const SineTemperatureCurveFactory = require('./SineTemperatureCurveFactory');

class ServiceManager {

	constructor(mqtt, logger, device) {
		this.mqtt = mqtt;
		this.curveFactory = new SineTemperatureCurveFactory();
		this.hour = 0;
		this.connected = false;
		this.logger = logger;
		this.device = new DeviceInfo(device);
		this.unit = device.unit;
		this.device.SensorSpec = new SensorSpec(device);
		const resolution = this.device.SensorSpec.Resolution;

		try {
			this.decimalPlaces = resolution.toString().split('.')[1].length;
		} catch (err) {
			this.decimalPlaces = 0;
		}

		this.logger.info(`Since resolution is ${resolution} temperatures will be truncated after ${this.decimalPlaces} decimal places`);
	}

	connect(brokerUrl) {
		return new Promise((resolve) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				resolve(this);
				this.client.publish('hw_info', this.device.toJson());
				this.connected = true;
			});
			this.client.on('message', (topic, message) => {
				this.logger.info(message.toString());
			});
		});
	}

	initialize(params, addRandomness) {
		this.temperatureCurve = this.curveFactory.createCurve(params, addRandomness);
		return this;
	}

	start() {
		const frequency = this.device.SensorSpec.Frequency;
		const intervalInSeconds = 1/frequency;
		this.logger.info('interval in seconds', intervalInSeconds);
		this.interval = setInterval(this.publish.bind(this), intervalInSeconds * 1000);
	}

	stop() {
		clearInterval(this.interval);
		process.exit();
	}

	publish() {
		const temperature = this.getTemperature();
		const device = this.device.DeviceId;
		const unit = this.unit;

		const newTemperature = temperature.toFixed(this.decimalPlaces);

		const message = JSON.stringify({
			temperature: newTemperature,
			device,
			unit,
		});
		if (this.connected) {
			this.client.publish('temperature', message);
		} else {
			this.logger.info(message);
		}
	}

	getTemperature() {
		if (this.hour >= 24) {
			this.hour = 0;
		} else {
			this.hour += 1;
		}

		return this.temperatureCurve.simulate(this.hour);
	}
}

module.exports = ServiceManager;
