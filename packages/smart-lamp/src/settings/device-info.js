const shortid = require('shortid');

module.exports = {

	manufacturer: process.env.SENSOR_MANUFACTURER || 'unknown',
	model: process.env.SENSOR_MODEL || 'unknown',
	revision: process.env.SENSOR_REVISION || 'unknown',
	deviceClass: process.env.SENSOR_CLASS || 'lighting',
	deviceId: process.env.SENSOR_ID || shortid.generate(),

	range: {
		min: process.env.SENSOR_MIN_RANGE || -10,
		max: process.env.SENSOR_MAX_RANGE || 50,
	},
	zero: process.env.SENSOR_ZERO || 0,
	resolution: process.env.SENSOR_RESOLUTION || 1,
	frequency: process.env.SENSOR_FREQUENCY_RESPONSE || 1,
};
