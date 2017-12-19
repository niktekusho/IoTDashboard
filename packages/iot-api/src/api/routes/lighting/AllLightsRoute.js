const LightingRoute = require('./LightingRoute');

class AllLightsRoute extends LightingRoute {
	method() {
		return 'get';
	}

	routeFunction(req, res) {
		this.request.get(this.lightingService, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = AllLightsRoute;
