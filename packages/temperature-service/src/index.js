const mqtt = require('mqtt');
const pino = require('pino');
const mongoose = require('mongoose');

const ServiceManager = require('./ServiceManager');
const settings = require('./settings');

const logger = pino();
mongoose.connect(settings.db.url, (error) => {
	if (error) {
		throw error;
	}

	logger.info(`Service connected to MongoDB instance running at: ${settings.db.url}`);
});

const service = new ServiceManager(mqtt, mongoose.connection, logger);
const url = `${settings.host}:${settings.port}`;
service.connect(`mqtt://${url}`)
	.then(() => logger.info(`Service connected to: ${url}`));
