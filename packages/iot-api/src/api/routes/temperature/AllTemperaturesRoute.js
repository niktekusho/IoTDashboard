const TemperatureRoute = require('./TemperatureRoute');

class AllTemperaturesRoute extends TemperatureRoute {
	method() {
		return 'get';
	}

	routeFunction(req, res) {
		this.request.get(this.temperatureService, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = AllTemperaturesRoute;
