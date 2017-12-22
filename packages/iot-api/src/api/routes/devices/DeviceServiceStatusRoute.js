const DevicesRoute = require('./DevicesRoute');

class DeviceServiceStatusRoute extends DevicesRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/status';
	}

	requestFunction() {
		return new Promise((resolve, reject) => {
			const url = `${this.devicesService}/ping`;
			this.request.get(url, (error, response) => {
				if (error) {
					return reject(error);
				}

				const result = response.body === 'pong' ? true : false;
				return resolve(result);
			});
		});
	}

	routeFunction(req, res) {
		this.requestFunction().then(result => res.send(result)).catch(error => res.status(500).send(error));
	}
}

module.exports = DeviceServiceStatusRoute;
