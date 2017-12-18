const DevicesRoute = require('./DevicesRoute');

class DeviceClassesRoute extends DevicesRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/classes/:class';
	}

	routeFunction(req, res) {
		const url = `${this.devicesService}/classes/${req.params.class}`;
		this.request.get(url, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = DeviceClassesRoute;
