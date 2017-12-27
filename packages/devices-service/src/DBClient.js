function dbClient(mongoose, settings, logger) {
	mongoose.Promise = global.Promise;

	mongoose.connect(settings.db.url, { useMongoClient: true }, (error) => {
		if (error) {
			throw error;
		}

		logger.info(`Service connected to MongoDB instance running at: ${settings.db.url}`);
	});

	const db = mongoose.connection;
	db.on('error', () => logger.error('MongoDB connection error'));
	db.once('open', () => logger.info('DB successfully opened'));
}


module.exports = dbClient;
