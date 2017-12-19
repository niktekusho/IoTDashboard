const helper = require('./_helper');

module.exports = {
	host: helper('LIGHTING_HOST', 'localhost'),
	port: helper('LIGHTING_PORT', 4000),
};
