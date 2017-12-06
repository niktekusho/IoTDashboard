const mqtt = require('mqtt');
const pino = require('pino');


const ServiceManager = require('./ServiceManager');
const settings = require('./settings');

const logger = pino();

const service = new ServiceManager(mqtt);
const url = `${settings.host}:${settings.port}`;
service.connect(`mqtt://${url}`, logger)
	.then(() => pino.info(`Service connected to: ${url}`));

service.initialize(settings.params, true).start();
