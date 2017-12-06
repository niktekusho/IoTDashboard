class ServiceManager {

	constructor(mqtt) {
		this.mqtt = mqtt;
	}

	connect(brokerUrl) {
		return new Promise((resolve, reject) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				this.client.subscribe(['temperature', 'temperature/active', 'shutdown']);
				this.client.on('message', (topic, message) => {
					if (topic === 'shutdown') {
						this.stop();
					} else if (topic === 'temperature' || topic === 'temperature/active') {
						console.log(message.toString());
					}
				});
				resolve(this);
			});
			// setTimeout(reject, 5000);
		});
	}

	stop() {
		// TODO
		process.exit();
	}
}

module.exports = ServiceManager;
