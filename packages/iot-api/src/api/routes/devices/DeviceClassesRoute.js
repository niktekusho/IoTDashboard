const DevicesRoute = require('./DevicesRoute');

class DeviceClassesRoute extends DevicesRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/classes';
	}

	routeFunction(req, res) {
		const url = `${this.devicesService}/classes`;
		this.request.get(url, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = DeviceClassesRoute;
