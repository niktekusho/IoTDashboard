const devices = require('./devices');
const temperature = require('./temperature');
const lighting = require('./lighting');
const user = require('./user');
const ServicesStatusRoute = require('./ServicesStatusRoute');

function routes(settings) {
	const devicesRoutes = devices(settings);
	const temperatureRoutes = temperature(settings);
	const lightingRoutes = lighting(settings);
	const userRoutes = user(settings);
	const status = new ServicesStatusRoute(settings);

	return {
		'devices': devicesRoutes,
		'temperature': temperatureRoutes,
		'lighting': lightingRoutes,
		'user': userRoutes,
		'status': [
			status,
		],
	};
}

module.exports = routes;
