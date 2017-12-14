const mqtt = require('mqtt');
const pino = require('pino');
const express = require('express');
const bodyParser = require('body-parser');
const pinoExpress = require('express-pino-logger');
const mongoose = require('mongoose');

const ServiceManager = require('./ServiceManager');
const DBClient = require('./DBClient');
const settings = require('./settings');
const temperaturesAPI = require('./api/temperatures');

const logger = pino();
const expressLogger = pinoExpress({ logger });

const app = express();
app.use(expressLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', temperaturesAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	// res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.locals.error = err;

	// render the error page
	res.status(err.status || 500);
	res.send('error');
});

app.listen(settings.api_port, () => {
	logger.info(`Temperature service started at: ${settings.api_port}`);
});

DBClient(mongoose, settings, logger);

const service = new ServiceManager(mqtt, logger);
const url = `${settings.host}:${settings.port}`;

logger.info(url);

service.connect(`mqtt://${url}`)
	.then(() => logger.info(`Service connected to MQTT broker at: ${url}`));
