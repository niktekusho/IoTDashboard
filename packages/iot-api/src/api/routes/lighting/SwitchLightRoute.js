const LightingRoute = require('./LightingRoute');

class SwitchLightRoute extends LightingRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/device/:deviceId/switch';
	}

	routeFunction(req, res) {
		const url = `${this.lightingService}/device/${req.params.deviceId}/switch`;
		this.request.get(url, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = SwitchLightRoute;
