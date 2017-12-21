const devices = require('./devices');
const temperature = require('./temperature');
const lighting = require('./lighting');
const user = require('./user');

function routes(settings) {
	const devicesRoutes = devices(settings);
	const temperatureRoutes = temperature(settings);
	const lightingRoutes = lighting(settings);
	const userRoutes = user(settings);

	return {
		'devices': devicesRoutes,
		'temperature': temperatureRoutes,
		'lighting': lightingRoutes,
		'user': userRoutes,
	};
}

module.exports = routes;
