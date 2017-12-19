const AllSettingsRoute = require('./AllSettingsRoute');
const TemperatureUnitsRoute = require('./TemperatureUnitsRoute');
const UpdateSettingsRoute = require('./UpdateSettingsRoute');

function routes(settings) {
	const allSettings = new AllSettingsRoute(settings);
	const temperatureUnits = new TemperatureUnitsRoute(settings);
	const updateSettings = new UpdateSettingsRoute(settings);

	return [
		allSettings,
		temperatureUnits,
		updateSettings,
	];
}

module.exports = routes;
