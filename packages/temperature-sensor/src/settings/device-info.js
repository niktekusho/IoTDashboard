module.exports = {

	manufacturer: process.env.SENSOR_MANUFACTURER || 'unknown',
	model: process.env.SENSOR_MODEL || 'unknown',
	revision: process.env.SENSOR_REVISION || 'unknown',
	deviceClass: process.env.SENSOR_CLASS || 'temperature',
	deviceId: process.env.SENSOR_ID || 'unknown',

};
