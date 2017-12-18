const server = require('./server');

class ServiceManager {

	constructor(logger, routes, settings) {
		this.settings = settings;
		this.log = logger;
		this.app = server(logger, routes, settings);
	}

	start() {
		const port = this.settings.api_port;
		this.app.listen(port, () => {
			this.log.info(`API service started at: ${port}`);
		});
	}
}

module.exports = ServiceManager;
