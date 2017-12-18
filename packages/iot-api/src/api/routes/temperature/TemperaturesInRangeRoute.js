const TemperatureRoute = require('./TemperatureRoute');

class TemperaturesInRangeRoute extends TemperatureRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/:from/:to';
	}

	routeFunction(req, res) {
		const url = `${this.devicesService}/${req.params.from}/${req.params.to}`;
		this.request.get(url, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = TemperaturesInRangeRoute;
