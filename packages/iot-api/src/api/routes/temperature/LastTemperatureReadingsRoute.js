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

			this.requestSettings()
				.then(userTemperatureUnit => this.convertTemperatures(temperatureDevices, userTemperatureUnit))
				.then(convertedDevices => res.send(convertedDevices))
				.catch(error => res.status(500).send(error));
		});
	}
}

module.exports = LastTemperatureReadingsRoute;
