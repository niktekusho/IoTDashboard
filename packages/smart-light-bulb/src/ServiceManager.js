const { DeviceInfo, SensorSpec } = require('device-info');

const Lamp = require('./Lamp');

class ServiceManager {

	constructor(mqtt, logger, device) {
		this.mqtt = mqtt;
		this.hour = 0;
		this.connected = false;
		this.logger = logger;
		this.device = new DeviceInfo(device);
		this.device.SensorSpec = new SensorSpec(device);
		this.lamp = new Lamp();
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

	start() {
		this.interval = setInterval(this.publish.bind(this), 1000);
	}

	stop() {
		clearInterval(this.interval);
		process.exit();
	}

	publish() {
		const device = this.device.DeviceId;
		const message = JSON.stringify({
			device,
		});
		if (this.connected) {
			this.client.publish('lighting', message);
		} else {
			this.logger.info(message);
		}
	}
}

module.exports = ServiceManager;
