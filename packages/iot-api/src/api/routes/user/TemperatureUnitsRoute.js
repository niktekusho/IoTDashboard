const UserRoute = require('./UserRoute');

class TemperatureUnitsRoute extends UserRoute {
	method() {
		return 'get';
	}

	routeFunction(req, res) {
		this.request.get(this.userService + '/temperature' , function (error, response) {
			if (error) {
				return res.status(500).send(error);
			}

			return res.send(response.body);
		});
	}
}

module.exports = TemperatureUnitsRoute;
