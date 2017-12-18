const Route = require('../Route');

class TemperaturesRoute extends Route {
	constructor(settings) {
		super(settings);
		this.temperatureService = `http://${settings.temperature.host}:${settings.temperature.port}`;
	}

	endpoint() {
		return '/temperature';
	}
}

module.exports = TemperaturesRoute;
