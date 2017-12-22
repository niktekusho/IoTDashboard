const TemperatureData = require('temperature-data');
const TemperatureModel = require('./TemperatureModel');

class ServiceManager {

	constructor(mqtt, logger) {
		this.mqtt = mqtt;
		this.log = logger;
	}

	connect(brokerUrl) {
		return new Promise((resolve) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				this.client.subscribe(['temperature', 'temperature/active']);
				this.client.on('message', (topic, message) => {
					if (topic === 'temperature' || topic === 'temperature/active') {
						this.handleMessage(message);
					}
				});
				resolve(this);
			});
			// setTimeout(reject, 5000);
		});
	}

	handleMessage(message) {
		const data = TemperatureData.fromMQTT(message);
		this.log.info(data);
		const temperatureModel = new TemperatureModel({
			temperature: data.temperature,
			device: data.device,
			unit: data.unit,
		});
		temperatureModel.save((err) => {
			if (err) {
				this.log.error(err);
			}
		});
	}
}

module.exports = ServiceManager;
