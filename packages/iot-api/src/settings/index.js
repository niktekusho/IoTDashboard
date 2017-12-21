const helper = require('./_helper');

const devices = require('./devices-service');
const temperature = require('./temperature-service');
const lighting = require('./lighting-service');
const user = require('./user-service');

module.exports = {
	api_port: helper('API_PORT', 8000),
	devices,
	temperature,
	lighting,
	user,
};
