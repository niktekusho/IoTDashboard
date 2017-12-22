const AllLightsRoute = require('./AllLightsRoute');
const LightByDeviceRoute = require('./LightByDeviceRoute');
const LightsInRangeRoute = require('./LightsInRangeRoute');
const LastLightsReadingRoute = require('./LastLightsReadingRoute');
const SwitchLightRoute = require('./SwitchLightRoute');

function routes(settings) {
	const allLights = new AllLightsRoute(settings);
	const lightsByDevice = new LightByDeviceRoute(settings);
	const lightsInRange = new LightsInRangeRoute(settings);
	const lastLightsReading = new LastLightsReadingRoute(settings);
	const switchLightRoute = new SwitchLightRoute(settings);

	return [
		allLights,
		lightsByDevice,
		lightsInRange,
		lastLightsReading,
		switchLightRoute,
	];
}

module.exports = routes;
