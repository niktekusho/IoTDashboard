const db = require('./db');

module.exports = {
	host: process.env.MQTT_HOST || '192.168.1.129',
	port: process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883,
	db,
};
