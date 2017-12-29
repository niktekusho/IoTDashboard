const Route = require('../Route');

class LightingRoute extends Route {
	constructor(settings) {
		super(settings);
		this.lightingService = `http://${settings.lighting.host}:${settings.lighting.port}`;
	}

	endpoint() {
		return '/lighting';
	}

	requestDeviceInfo(deviceId) {
		return new Promise((resolve, reject) => {
			const devicesUrl = `http://${this.settings.devices.host}:${this.settings.devices.port}/device/${deviceId}`;
			this.request.get(devicesUrl, (error, response) => {
				if (error) {
					reject(error);
				} else {
					if (response.statusCode !== 200) {
						reject(response.body);
					} else {
						const device = JSON.parse(response.body);
						// device is an array with one element
						resolve(device[0]);
					}
				}
			});
		});
	}
}

module.exports = LightingRoute;
