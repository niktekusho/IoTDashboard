const Route = require('../Route');

class TemperaturesRoute extends Route {
	constructor(settings) {
		super(settings);
		this.temperatureService = `http://${settings.temperature.host}:${settings.temperature.port}`;
	}

	endpoint() {
		return '/temperature';
	}

	requestSettings() {
		return new Promise((resolve, reject) => {
			const settingsUrl = `http://${this.settings.user.host}:${this.settings.user.port}`;
			this.request.get(settingsUrl, (error, response) => {
				if (error) {
					reject(error);
				} else {
					const settings = JSON.parse(response.body);
					const units = JSON.parse(settings.units);
					resolve(units.temperature);
				}
			});
		});
	}

	convertTemperatures(temperatureDevices, userTemperatureUnit) {
		const requests = [];
		for (let index in temperatureDevices) {
			const temperatureDevice = temperatureDevices[index];
			if (temperatureDevice.unit !== userTemperatureUnit) {
				console.log('trying convertion'); // eslint-disable-line
				requests.push(this.convertTemperature(temperatureDevice.unit, userTemperatureUnit, temperatureDevice.temperature));
			}
		}
		Promise.all(requests);
	}

	convertTemperature(from, to, value) {
		const settingsUrl = `http://${this.settings.user.host}:${this.settings.user.port}/convert`;
		return new Promise((resolve, reject) => {
			const postObj = {
				from,
				to,
				value,
			};
			this.request.post(settingsUrl, { json: postObj}, (error, httpResponse, body) => {
				if (error) {
					reject(error);
				}

				resolve(body);
			});
		});
	}

}

module.exports = TemperaturesRoute;
