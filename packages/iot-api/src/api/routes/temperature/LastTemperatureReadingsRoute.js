const TemperatureRoute = require('./TemperatureRoute');

class LastTemperatureReadingsRoute extends TemperatureRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/last';
	}

	routeFunction(req, res) {
		this.request.get(this.temperatureService + '/last', (error, response) => {
			if (error) {
				return res.status(500).send(error);
			}

			const temperatureDevices = JSON.parse(response.body);

			this.requestSettings().then((userTemperatureUnit) => {
				for (let index in temperatureDevices) {
					const temperatureDevice = temperatureDevices[index];
					console.log(temperatureDevice);
					if (temperatureDevice.unit !== userTemperatureUnit) {
						console.log('trying convertion');
						const settingsUrl = `http://${this.settings.user.host}:${this.settings.user.port}/convert`;
						const postObj = {
							from: temperatureDevice.unit,
							to: userTemperatureUnit,
							value: temperatureDevice.temperature,
						};
						this.request.post(settingsUrl, { json: postObj}, (error, httpResponse, body) => {
							if (error) {
								throw new Error(error);
							}

							temperatureDevices[index].temperature = body;
							temperatureDevices[index].unit = postObj.to;
						});
					}
				}
				return res.send(temperatureDevices);
			}).catch(error => res.status(500).send(error));
		});
	}
}

module.exports = LastTemperatureReadingsRoute;
