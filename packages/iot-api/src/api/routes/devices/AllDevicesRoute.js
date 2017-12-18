const DevicesRoute = require('./DevicesRoute');

class AllDevicesRoute extends DevicesRoute {
	method() {
		return 'get';
	}

	routeFunction(res) {
		this.request.get(this.devicesService, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = AllDevicesRoute;
