const AllTemperaturesRoute = require('./AllTemperaturesRoute');
const TemperaturesByDeviceRoute = require('./TemperaturesByDeviceRoute');
const TemperaturesInRangeRoute = require('./TemperaturesInRangeRoute');

function routes(settings) {
	const allTemperatures = new AllTemperaturesRoute(settings);
	const temperaturesByDevice = new TemperaturesByDeviceRoute(settings);
	const temperaturesInRange = new TemperaturesInRangeRoute(settings);

	return [
		allTemperatures,
		temperaturesByDevice,
		temperaturesInRange,
	];
}

module.exports = routes;
