const AllLightsRoute = require('./AllLightsRoute');
const LightByDeviceRoute = require('./LightByDeviceRoute');
const LightsInRangeRoute = require('./LightsInRangeRoute');
const LastLightsReadingRoute = require('./LastLightsReadingRoute');
const SwitchLightRoute = require('./SwitchLightRoute');
const LightingServiceStatusRoute = require('./LightingServiceStatusRoute');

function routes(settings) {
	const allLights = new AllLightsRoute(settings);
	const lightsByDevice = new LightByDeviceRoute(settings);
	const lightsInRange = new LightsInRangeRoute(settings);
	const lastLightsReading = new LastLightsReadingRoute(settings);
	const switchLightRoute = new SwitchLightRoute(settings);
	const lightingServiceStatus = new LightingServiceStatusRoute(settings);

	return [
		allLights,
		lightsByDevice,
		lightsInRange,
		lastLightsReading,
		switchLightRoute,
		lightingServiceStatus,
	];
}

module.exports = routes;
