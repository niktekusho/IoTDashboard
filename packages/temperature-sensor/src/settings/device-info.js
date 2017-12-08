const shortid = require('shortid');

module.exports = {

	manufacturer: process.env.SENSOR_MANUFACTURER || 'unknown',
	model: process.env.SENSOR_MODEL || 'unknown',
	revision: process.env.SENSOR_REVISION || 'unknown',
	deviceClass: process.env.SENSOR_CLASS || 'temperature',
	deviceId: process.env.SENSOR_ID || shortid.generate(),

	range: process.env.SENSOR_RANGE || '{ min: -10, max: 50 }',
	zero: process.env.SENSOR_ZERO || 0,
	resolution: process.env.SENSOR_RESOLUTION || 0.001,
	frequency: process.env.SENSOR_FREQUENCY_RESPONSE || 1,
};
