const deviceInfo = require('./device-info');
const lamp = require('./lamp-info');

module.exports = {
	host: process.env.MQTT_HOST || 'localhost',
	port: process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883,
	device: deviceInfo,
	lamp,
};
