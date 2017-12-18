module.exports = function _helper(envName, defaultValue) {
	if (process.env[envName]) {
		return process.env[envName];
	}
	return defaultValue;
};
