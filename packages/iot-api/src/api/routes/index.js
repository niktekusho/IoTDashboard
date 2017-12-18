const devices = require('./devices');
const temperature = require('./temperature');

function routes(settings) {
	const devicesRoutes = devices(settings);
	const temperatureRoutes = temperature(settings);

	return {
		'devices': devicesRoutes,
		'temperature': temperatureRoutes,
	};
}

module.exports = routes;
