const mqtt = require('mqtt');
const pino = require('pino');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const ServiceManager = require('./ServiceManager');
const settings = require('./settings');

const logger = pino();

const service = new ServiceManager(mqtt, logger, settings.device, settings.lamp);
const url = `${settings.host}:${settings.port}`;
service.connect(`mqtt://${url}`)
	.then(() => logger.info(`Service connected to: ${url}`));

service.start();
