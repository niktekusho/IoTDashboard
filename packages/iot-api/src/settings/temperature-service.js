const helper = require('./_helper');

module.exports = {
	host: helper('TEMPERATURE_HOST', 'localhost'),
	port: helper('TEMPERATURE_PORT', 3000),
};
