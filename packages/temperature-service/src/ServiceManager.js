class ServiceManager {

	constructor(mqtt, db, logger) {
		this.mqtt = mqtt;
		this.db = db;
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

	handleMessage(topic, message) {
		this.log.info(message.toString());
	}
}

module.exports = ServiceManager;
