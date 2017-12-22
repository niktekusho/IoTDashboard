const Router = require('express').Router;

const settings = require('../settings');
const routes = require('./routes')(settings);
const Route = require('./routes/Route');

const router = Router();

for (const _routes of Object.values(routes)) {
	if (Array.isArray(_routes)) {
		for (const route of _routes) {
			Route.addToRouter(route, router);
		}
	}
}

module.exports = router;
