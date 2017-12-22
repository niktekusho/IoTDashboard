const AllTemperaturesRoute = require('./AllTemperaturesRoute');
const TemperaturesByDeviceRoute = require('./TemperaturesByDeviceRoute');
const TemperaturesInRangeRoute = require('./TemperaturesInRangeRoute');
const LastTemperatureReadingsRoute = require('./LastTemperatureReadingsRoute');
const TemperatureServiceStatusRoute = require('./TemperatureServiceStatusRoute');

function routes(settings) {
	const allTemperatures = new AllTemperaturesRoute(settings);
	const temperaturesByDevice = new TemperaturesByDeviceRoute(settings);
	const temperaturesInRange = new TemperaturesInRangeRoute(settings);
	const lastTemperatureReadings = new LastTemperatureReadingsRoute(settings);
	const temperatureServiceStatus = new TemperatureServiceStatusRoute(settings);

	return [
		allTemperatures,
		temperaturesByDevice,
		temperaturesInRange,
		lastTemperatureReadings,
		temperatureServiceStatus,
	];
}

module.exports = routes;
