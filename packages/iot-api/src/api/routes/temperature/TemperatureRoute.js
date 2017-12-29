const Route = require('../Route');

class TemperaturesRoute extends Route {
	constructor(settings) {
		super(settings);
		this.temperatureService = `http://${settings.temperature.host}:${settings.temperature.port}`;
	}

	endpoint() {
		return '/temperature';
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
		const requests = [], newTemperatureDevices = [];
		for (let index in temperatureDevices) {
			const temperatureDevice = temperatureDevices[index];
			if (temperatureDevice.unit !== userTemperatureUnit) {
				console.log('trying convertion'); // eslint-disable-line
				requests.push(this.convertTemperature(temperatureDevice, userTemperatureUnit));
			} else {
				newTemperatureDevices.push(temperatureDevice);
			}
		}
		return Promise.all(requests).then((convertedTemperatureDevices) => {
			newTemperatureDevices.push(...convertedTemperatureDevices);
			return newTemperatureDevices;
		});
	}

	convertTemperature(device, to) {
		const settingsUrl = `http://${this.settings.user.host}:${this.settings.user.port}/convert`;
		return new Promise((resolve, reject) => {
			const postObj = {
				from: device.unit,
				to,
				value: device.temperature,
			};
			this.request.post(settingsUrl, { json: postObj}, (error, httpResponse, body) => {
				if (error) {
					reject(error);
				}

				resolve(Object.assign({}, device, { temperature: body, unit: to }));
			});
		});
	}

}

module.exports = TemperaturesRoute;
