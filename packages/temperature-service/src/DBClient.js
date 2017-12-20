function dbClient(mongoose, settings, logger) {
	mongoose.connect(settings.db.url, { useMongoClient: true }, (error) => {
		if (error) {
			throw error;
		}

		logger.info(`Service connected to MongoDB instance running at: ${settings.db.url}`);
	});

	const db = mongoose.connection;
	db.on('error', (err) => logger.error(err));
	db.once('open', () => logger.info('DB successfully opened'));

	mongoose.Promise = global.Promise;
}

module.exports = dbClient;
