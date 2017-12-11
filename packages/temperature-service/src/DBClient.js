const mongoose = require('mongoose');

function dbClient(settings, logger) {
	mongoose.connect(settings.db.url, (error) => {
		if (error) {
			throw error;
		}

		logger.info(`Service connected to MongoDB instance running at: ${settings.db.url}`);
	});

	const db = mongoose.connection;
	db.on('error', () => logger.error('MongoDB connection error'));
	db.once('open', () => logger.info('DB successfully opened'));

	mongoose.Promise = global.Promise;
}


module.exports = dbClient;
