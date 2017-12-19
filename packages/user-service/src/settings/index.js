const db = require('./db');

module.exports = {
	db,
	api_port: process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 6000,
};
