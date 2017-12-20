module.exports = {
	powerConsumption: process.env.LAMP_PWR ? parseFloat(process.env.LAMP_PWR) : 10,
	colorTemperature: process.env.LAMP_COLOR_TEMPERATURE ?  parseFloat(process.env.LAMP_COLOR_TEMPERATURE) : 4000,
	lightIntensity: process.env.LAMP_LIGHT_INTENSITY ? parseFloat(process.env.LAMP_LIGHT_INTENSITY) : 800,
};
