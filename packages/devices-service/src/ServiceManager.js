const { DeviceInfo, SensorSpec } = require('device-info');
const DeviceModel = require('./DeviceModel');

class ServiceManager {

	constructor(mqtt, logger) {
		this.mqtt = mqtt;
		this.log = logger;
	}

	connect(brokerUrl) {
		return new Promise((resolve) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				this.client.subscribe('hw_info');
				this.client.on('message', (topic, message) => {
					if (topic === 'hw_info') {
						this.handleMessage(message);
					}
				});
				resolve(this);
			});
			// setTimeout(reject, 5000);
		});
	}

	handleMessage(message) {
		const messageString = message.toString();
		this.log.info(messageString);
		const data = JSON.parse(messageString);
		const device = new DeviceInfo(data);
		device.SensorSpec = new SensorSpec(data.spec);
		const deviceModel = new DeviceModel({
			manufacturer: device.Manufacturer,
			model: device.Model,
			revision: device.Revision,
			deviceClass: device.DeviceClass,
			deviceId: device.DeviceId,
			range: {
				min: device.SensorSpec.Range.min,
				max: device.SensorSpec.Range.max,
			},
			zero: device.Zero,
			resolution: device.Resolution,
			frequency: device.Frequency,
		});
		deviceModel.save((err) => {
			if (err) {
				this.log.error(err);
			}
		});
	}
}

module.exports = ServiceManager;
