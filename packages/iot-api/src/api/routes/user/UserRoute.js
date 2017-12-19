const Route = require('../Route');

class UserRoute extends Route {
	constructor(settings) {
		super(settings);
		this.userService = `http://${settings.user.host}:${settings.user.port}`;
	}

	endpoint() {
		return '/user';
	}
}

module.exports = UserRoute;
