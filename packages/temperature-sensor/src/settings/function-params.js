module.exports = {
	sineFrequencyScale: process.env.SENSOR_SINE_FREQUENCY ? parseInt(process.env.SENSOR_SINE_FREQUENCY, 10) : 10,
	baseTemperature: process.env.SENSOR_BASE_TEMP ? parseInt(process.env.SENSOR_BASE_TEMP, 10) : 20,
	sineAmplitudeScale: process.env.SENSOR_SINE_AMPLITUDE ? parseInt(process.env.SENSOR_SINE_AMPLITUDE, 10) : 3,
	sineOffset: process.env.SENSOR_SINE_OFFSET ? parseInt(process.env.SENSOR_SINE_OFFSET, 10) : 10,

};
