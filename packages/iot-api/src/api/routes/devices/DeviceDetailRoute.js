const DevicesRoute = require('./DevicesRoute');

class DeviceDetailRoute extends DevicesRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/device/:deviceId';
	}

	routeFunction(req, res) {
		const url = `${this.devicesService}/device/${req.params.deviceId}`;
		this.request.get(url, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = DeviceDetailRoute;
