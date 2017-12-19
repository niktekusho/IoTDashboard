const AllLightsRoute = require('./AllLightsRoute');
const LightByDeviceRoute = require('./LightByDeviceRoute');
const LightsInRangeRoute = require('./LightsInRangeRoute');

function routes(settings) {
	const allLights = new AllLightsRoute(settings);
	const lightsByDevice = new LightByDeviceRoute(settings);
	const lightsInRange = new LightsInRangeRoute(settings);

	return [
		allLights,
		lightsByDevice,
		lightsInRange,
	];
}

module.exports = routes;
