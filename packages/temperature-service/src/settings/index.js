const db = require('./db');

module.exports = {
	host: process.env.MQTT_HOST || 'localhost',
	port: process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883,
	api_port: process.env.API_PORT || 3000,
	db,
};
