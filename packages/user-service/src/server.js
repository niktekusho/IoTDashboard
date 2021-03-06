const express = require('express');
const pino = require('express-pino-logger');
const bodyParser = require('body-parser');

function initialize(logger, routes) {
	const expressLogger = pino({ logger });

	const app = express();
	app.use(expressLogger);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use('/', routes);

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	addErrorHandling(app);

	return app;
}

function addErrorHandling(app) {
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
}

module.exports = initialize;
