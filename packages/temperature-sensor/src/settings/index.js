const functionParams = require('./function-params');
const deviceInfo = require('./device-info');

module.exports = {
	host: process.env.MQTT_HOST || 'localhost',
	port: process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883,
	params: functionParams,

	device: deviceInfo,
};
