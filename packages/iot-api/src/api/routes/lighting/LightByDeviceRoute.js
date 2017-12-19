const LightingRoute = require('./LightingRoute');

class LightByDeviceRoute extends LightingRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/device/:deviceId';
	}

	routeFunction(req, res) {
		const url = `${this.lightingService}/device/${req.params.deviceId}`;
		this.request.get(url, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = LightByDeviceRoute;
