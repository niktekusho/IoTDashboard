const helper = require('./_helper');

module.exports = {
	host: helper('DEVICES_HOST', 'localhost'),
	port: helper('DEVICES_PORT', 3000),
};
