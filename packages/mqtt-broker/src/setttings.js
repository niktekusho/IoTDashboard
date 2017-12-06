const dbSettings = require('./db.settings');

module.exports = {
	port: process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883,
	backend: dbSettings(),
};
