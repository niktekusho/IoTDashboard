const LightingRoute = require('./LightingRoute');

class LastLightsReadingsRoute extends LightingRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/last';
	}

	routeFunction(req, res) {
		this.request.get(this.lightingService  + '/last', function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = LastLightsReadingsRoute;
