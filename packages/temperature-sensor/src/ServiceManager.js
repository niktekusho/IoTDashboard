const DeviceInfo = require('device-info');

const SineTemperatureCurveFactory = require('./SineTemperatureCurveFactory');

class ServiceManager {

	constructor(mqtt, logger, device) {
		this.mqtt = mqtt;
		this.curveFactory = new SineTemperatureCurveFactory();
		this.hour = 0;
		this.connected = false;
		this.logger = logger;
		this.device = new DeviceInfo(device);
	}

	connect(brokerUrl) {
		return new Promise((resolve) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				resolve(this);
				this.client.publish('hw_info', this.device.toJson());
				this.connected = true;
			});
			this.client.subscribe('shutdown');
			this.client.on('message', (topic, message) => {
				this.logger.info(message.toString());
				if (topic === 'shutdown') {
					this.stop();
				}
			});
		});
	}

	initialize(device, params, addRandomness) {
		this.temperatureCurve = this.curveFactory.createCurve(params, addRandomness);
		return this;
	}

	start() {
		this.interval = setInterval(this.publish.bind(this), 1000);
	}

	stop() {
		clearInterval(this.interval);
		process.exit();
	}

	publish() {
		const temperature = this.getTemperature();
		if (this.connected) {
			this.client.publish('temperature', temperature.toString());
		} else {
			this.logger.info(temperature);
		}
	}

	getTemperature() {
		if (this.hour === 24) {
			this.hour = 0;
		} else {
			this.hour += 1;
		}

		return this.temperatureCurve.simulate(this.hour);
	}
}

module.exports = ServiceManager;
