const redis = require('redis');
const pino = require('pino');

const ServiceManager = require('./ServiceManager');
const settings = require('./settings');
const routesInit = require('./api');
const dbClientInit = require('./DBClient');

const logger = pino();

const client = dbClientInit(redis, settings, logger);
const routes = routesInit(client);

const service = new ServiceManager(logger, routes, settings);

service.start();
