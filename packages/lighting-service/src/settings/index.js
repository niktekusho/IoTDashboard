const db = require('./db');

function mqttHost() {
	return process.env.MQTT_HOST || 'localhost';
}

function mqttPort() {
	return process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883;
}

module.exports = {
	host: mqttHost(),
	port: mqttPort(),
	api_port: process.env.API_PORT || 4000,
	db,
	mqtt_url: `mqtt://${mqttHost()}:${mqttPort()}`,
};
