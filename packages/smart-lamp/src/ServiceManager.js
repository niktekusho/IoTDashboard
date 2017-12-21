const { DeviceInfo, SensorSpec } = require('device-info');
const deviceOperations = require('./device-operations');

const Lamp = require('./Lamp');

class ServiceManager {

	constructor(mqtt, logger, device, lampData) {
		this.mqtt = mqtt;
		this.connected = false;
		this.logger = logger;
		this.device = new DeviceInfo(device);
		this.device.SensorSpec = new SensorSpec(device);
		this.device.operations = deviceOperations;
		this.lamp = new Lamp(lampData);
	}

	connect(brokerUrl) {
		return new Promise((resolve) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				this.client.subscribe(['lighting', 'lighting/active']);
				this.client.publish('hw_info', this.device.toJson());
				this.connected = true;
				resolve(this);
			});
			this.client.on('message', (topic, message) => {
				this.handleMessage(message);
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
		const lampState = this.lamp.getState();
		const deviceId = this.device.DeviceId;
		const message = JSON.stringify({
			state: lampState,
			device: deviceId,
		});
		if (this.connected) {
			this.client.publish('lighting/active', message);
		} else {
			this.logger.info(message);
		}
	}

	handleMessage(msg) {
		const msgAsString = msg.toString();
		this.logger.info(msgAsString);
		const obj = JSON.parse(msgAsString);
		if (obj.device === this.device.DeviceId && obj.cmd === 'switch') {
			this.lamp.switchState();
		}
	}
}

module.exports = ServiceManager;
