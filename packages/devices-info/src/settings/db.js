function _helper(envName, defaultValue) {
	if (process.env[envName]) {
		return process.env[envName];
	}
	return defaultValue;
}

function getHost() {
	return _helper('MONGO_HOST', 'localhost');
}

function getPort() {
	return _helper('MONGO_PORT', 30031);
}

function getUser() {
	return _helper('MONGO_USER', 'root');
}

function getPassword() {
	return _helper('MONGO_PASSWORD', 'root');
}

function getDataBase() {
	return _helper('MONGO_DB_NAME', 'devices');
}

module.exports = {
	host: getHost(),
	port: getPort(),
	user: getUser(),
	password: getPassword(),
	db: getDataBase(),
	url: `mongodb://${getHost()}:${getPort()}/${getDataBase()}`,
};
