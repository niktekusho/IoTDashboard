const Route = require('../Route');

class LightingRoute extends Route {
	constructor(settings) {
		super(settings);
		this.lightingService = `http://${settings.lighting.host}:${settings.lighting.port}`;
	}

	endpoint() {
		return '/lighting';
	}
}

module.exports = LightingRoute;
