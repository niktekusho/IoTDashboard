const UserRoute = require('./UserRoute');

class UpdateSettingsRoute extends UserRoute {
	method() {
		return 'post';
	}

	routeFunction(req, res) {
		this.request.post(this.userService, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = UpdateSettingsRoute;
