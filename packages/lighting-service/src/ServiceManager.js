const LightData = require('./LightData');

class ServiceManager {

	constructor(mqtt, logger) {
		this.client = mqtt;
		this.log = logger;
	}

	start() {
		this.client.on('message', (topic, message) => {
			if (topic === 'lighting' || topic === 'lighting/active') {
				this.handleMessage(message);
			}
		});
	}

	handleMessage(message) {
		let data = JSON.parse(message.toString());
		this.log.info(data);
		if (data.cmd) {
			// we sent this message
			return;
		}
		const lightingDevice = new LightData({
			state: data.state,
			device: data.device,
		});
		lightingDevice.save((err) => {
			if (err) {
				this.log.error(err);
			}
		});
	}
}

module.exports = ServiceManager;
