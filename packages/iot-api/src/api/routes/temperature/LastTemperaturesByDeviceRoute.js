const TemperatureRoute = require('./TemperatureRoute');

class LastTemperaturesByDeviceRoute extends TemperatureRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/device/:deviceId/last';
	}

	routeFunction(req, res) {
		const url = `${this.temperatureService}/device/${req.params.deviceId}`;
		this.request.get(url, (error, response) => {
			if (error) {
				return res.status(500).send(error);
			}

			const temperatureDevices = JSON.parse(response.body);
			const lastTen = temperatureDevices.slice(temperatureDevices.length - 50, temperatureDevices.length);

			this.requestSettings()
				.then(userTemperatureUnit => this.convertTemperatures(lastTen, userTemperatureUnit))
				.then((convertedDevices) => {
					this.requestDeviceInfo(req.params.deviceId)
						.then((deviceInfo) => {
							const obj = {
								device: deviceInfo,
								temperatures: convertedDevices,
							};
							res.send(obj);
						})
						.catch(err => res.status(500).send(err));
				})
				.catch(error => res.status(500).send(error));
		});
	}
}

module.exports = LastTemperaturesByDeviceRoute;
