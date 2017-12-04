module.exports = {
	host: process.env.MQTT_HOST || 'localhost',
	port: process.env.MQTT_PORT ? parseInt(process.env.MQTT_PORT, 10) : 1883,
	params: {
		sensorFrequency: process.env.SENSOR_FREQUENCY ? parseInt(process.env.SENSOR_FREQUENCY, 10) : 10,
		baseTemperature: process.env.SENSOR_BASE_TEMP ? parseInt(process.env.SENSOR_BASE_TEMP, 10) : 20,
		sineAmplitudeScale: process.env.SENSOR_AMPLITUDE ? parseInt(process.env.SENSOR_AMPLITUDE, 10) : 3,
		sineOffset: process.env.SENSOR_OFFSET ? parseInt(process.env.SENSOR_OFFSET, 10) : 10,
	}
};
