const UserRoute = require('./UserRoute');

class UpdateSettingsRoute extends UserRoute {
	method() {
		return 'post';
	}

	routeFunction(req, res) {
		const postOptions = {
			url: this.userService,
			json: req.body,
		};
		this.request.post(postOptions, function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = UpdateSettingsRoute;
