function dbClient(redis, settings, logger) {
	const client = redis.createClient({
		host: settings.db.host,
		port: settings.db.port,
		db: settings.db.id,
	});

	client.on('error', err => logger.error(err));

	client.on('ready', () => logger.info(`Successfully connected to db: ${settings.db.url}`));

	return client;
}

module.exports = dbClient;
