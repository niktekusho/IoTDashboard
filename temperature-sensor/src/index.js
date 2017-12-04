const mqtt = require('mqtt');

const ServiceManager = require('./ServiceManager');
const settings = require('./settings');

const service = new ServiceManager(mqtt);
const url = `${settings.host}:${settings.port}`;
service.connect(`mqtt://${url}`)
	.then(() => console.log(`Service connected to: ${url}`))
	.catch((err) => {
		throw new Error(err);
	});

service.start(settings.params, true);
