const Route = require('./Route');

const UserServiceStatusRoute = require('./user/UserServiceStatus');
const DeviceServiceStatusRoute = require('./devices/DeviceServiceStatusRoute');
const TemperatureServiceStatusRoute = require('./temperature/TemperatureServiceStatusRoute');
const LightingServiceStatusRoute = require('./lighting/LightingServiceStatusRoute');

class ServicesStatusRoute extends Route {
	method() {
		return 'get';
	}

	endpoint() {
		return '/';
	}

	routeFunction(req, res) {
		const userServiceStatus = new UserServiceStatusRoute(this.settings);
		const deviceServiceStatus = new DeviceServiceStatusRoute(this.settings);
		const temperatureServiceStatus = new TemperatureServiceStatusRoute(this.settings);
		const lightingServiceStatus = new LightingServiceStatusRoute(this.settings);

		const status = {};

		const promises = [
			userServiceStatus.requestFunction().then(
				result => status.user = result
			).catch(
				() => status.user = false
			),
			deviceServiceStatus.requestFunction().then(
				result => status.devices = result
			).catch(
				() => status.devices = false
			),
			temperatureServiceStatus.requestFunction().then(
				result => status.temperature = result
			).catch(
				() => status.temperature = false
			),
			lightingServiceStatus.requestFunction().then(
				result => status.lighting = result
			).catch(
				() => status.lighting = false
			),
		];

		Promise.all(promises).then(() => res.send(status));
	}
}

module.exports = ServicesStatusRoute;
