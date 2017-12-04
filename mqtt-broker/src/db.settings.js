function dbChoice() {
	if (process.env.MQTT_PERSISTANCE) {
		return process.env.MQTT_PERSISTANCE;
	}

	// default persistance choice is mongodb
	return 'mongo';
}

function getHost() {
	if (process.env.PERSISTANCE_HOST) {
		return process.env.PERSISTANCE_HOST;
	}

	// default host
	return 'localhost';
}

function getPort() {
	if (process.env.PERSISTANCE_PORT) {
		return process.env.PERSISTANCE_PORT;
	}

	// default port for mongodb
	return 27017;
}

function getMongoCollection() {
	if (process.env.MONGO_PERSISTANCE_COLLECTION) {
		return process.env.MONGO_PERSISTANCE_COLLECTION;
	}

	// default collection for mongodb
	return 'ascoltatori';
}

function mongoBackendCreator() {
	if (dbChoice() !== 'mongo') {
		throw new Error('Wrong backend creator method');
	}
	return {
		type: 'mongo',
		url: `mongodb://${getHost()}:${getPort()}/mqtt`,
		pubsubCollection: getMongoCollection(),
		mongo: {},
	};
}

function redisBackendCreator() {
	if (dbChoice() === 'mongo') {
		throw new Error('Wrong backend creator method');
	}
	return {
		type: 'redis',
		redis: require('redis'),
		db: process.env.REDIS_DB_NUMBER || 12,
		port: getPort(),
		return_buffers: true, // to handle binary payloads
		host: getHost()
	};
}

function createBackendObject() {
	if (dbChoice() === 'mongo') {
		return mongoBackendCreator();
	}
	return redisBackendCreator();
}

module.exports = createBackendObject;
