const request = require('request');

class Route {
	constructor(settings) {
		this.settings = settings;
		this.request = request;
	}

	method() {
	}

	endpoint(){
	}

	// eslint-disable-next-line
	routeFunction(req, res, next) {
	}

	static addToRouter(route, router) {
		router[route.method()](route.endpoint(), (req, res) => route.routeFunction(req, res));
	}
}

module.exports = Route;
