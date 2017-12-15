const mqtt = require('mqtt');

const settings = require('./settings');

let client = null;

function initialize(logger) {
	if (!client) {
		client = mqtt.connect(settings.mqtt_url);
		client.on('connect', () => {
			logger.info(`Service connected to MQTT broker at: ${settings.mqtt_url}`);
			client.subscribe(['lighting', 'lighting/active']);
		});
	}
	return client;
}

module.exports = initialize;
