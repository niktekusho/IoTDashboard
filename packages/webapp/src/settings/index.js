function apiHost() {
	return process.env.API_HOST || 'localhost';
}

function apiPort() {
	return process.env.API_PORT ? parseInt(process.env.API_PORT) : 8000;
}

export default {
	api: {
		host: apiHost(),
		port: apiPort(),
		url: `http://${apiHost()}:${apiPort()}`,
	},
};
