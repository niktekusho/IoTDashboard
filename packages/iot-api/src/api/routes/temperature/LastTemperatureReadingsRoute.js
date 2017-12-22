const TemperatureRoute = require('./TemperatureRoute');

class LastTemperatureReadingsRoute extends TemperatureRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/last';
	}

	routeFunction(req, res) {
		this.request.get(this.temperatureService + '/last', function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = LastTemperatureReadingsRoute;
