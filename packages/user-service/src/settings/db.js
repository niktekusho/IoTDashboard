function _helper(envName, defaultValue) {
	if (process.env[envName]) {
		return process.env[envName];
	}
	return defaultValue;
}

function getHost() {
	return _helper('REDIS_HOST', 'localhost');
}

function getPort() {
	return _helper('REDIS_PORT', 6379);
}

function getDataBase() {
	return _helper('REDIS_DB_ID', 10);
}

module.exports = {
	host: getHost(),
	port: getPort(),
	id: getDataBase(),
	url: `redis://${getHost()}:${getPort()}/${getDataBase()}`,
};
