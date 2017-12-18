const pino = require('pino');

const ServiceManager = require('./ServiceManager');
const settings = require('./settings');
const routes = require('./api');

const logger = pino();

const service = new ServiceManager(logger, routes, settings);

service.start();
