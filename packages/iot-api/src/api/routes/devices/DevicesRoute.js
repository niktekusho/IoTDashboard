const Route = require('../Route');

class DevicesRoute extends Route {
	constructor(settings) {
		super(settings);
		this.devicesService = `http://${settings.devices.host}:${settings.devices.port}`;
	}

	endpoint() {
		return '/devices';
	}
}

module.exports = DevicesRoute;
