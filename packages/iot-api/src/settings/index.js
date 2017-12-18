const helper = require('./_helper');

const devices = require('./devices-service');
const temperature = require('./temperature-service');

module.exports = {
	api_port: helper('API_PORT', 8000),
	devices,
	temperature,
};
