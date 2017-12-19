const UserRoute = require('./UserRoute');

class AllSettingsRoute extends UserRoute {
	method() {
		return 'get';
	}

	routeFunction(req, res) {
		this.request.get(this.userService, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = AllSettingsRoute;
