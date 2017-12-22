const AllSettingsRoute = require('./AllSettingsRoute');
const TemperatureUnitsRoute = require('./TemperatureUnitsRoute');
const UpdateSettingsRoute = require('./UpdateSettingsRoute');
const UserServiceStatusRoute = require('./UserServiceStatus');

function routes(settings) {
	const allSettings = new AllSettingsRoute(settings);
	const temperatureUnits = new TemperatureUnitsRoute(settings);
	const updateSettings = new UpdateSettingsRoute(settings);
	const userServiceStatus = new UserServiceStatusRoute(settings);

	return [
		allSettings,
		temperatureUnits,
		updateSettings,
		userServiceStatus,
	];
}

module.exports = routes;
