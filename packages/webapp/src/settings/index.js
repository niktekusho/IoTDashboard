function apiHost() {
	return process.env.REACT_APP_API_HOST || 'localhost';
}

function apiPort() {
	return process.env.REACT_APP_API_PORT ? parseInt(process.env.REACT_APP_API_PORT) : 8000;
}

export default {
	api: {
		host: apiHost(),
		port: apiPort(),
		url: `http://${apiHost()}:${apiPort()}`,
	},
};
