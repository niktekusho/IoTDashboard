const Router = require('express').Router;

const TemperatureModel = require('../TemperatureModel');

const router = Router();

const defaultView = 'device temperature created_at';

router.get('/', (req, res) => {
	TemperatureModel.find({}, defaultView, (err, temperatures) => {
		return res.send(temperatures);
	});
});

router.get('/device/:deviceId', (req, res) => {
	const deviceId = req.params.deviceId;
	TemperatureModel.find({ device: deviceId }, defaultView, (err, temperatures) => {
		if (temperatures.length > 0) {
			return res.send(temperatures);
		}
		return res.status(404).send('DeviceId Not found');
	});
});

router.get('/:from/:to', (req, res) => {
	const from = req.params.from;
	const to = req.params.to;

	const fromDate = new Date(from).toISOString();
	const toDate = new Date(to).toISOString();

	if (fromDate > toDate) {
		return res.status(406).send('Wrong from and to parameters.');
	}

	const filter = {
		created_at: {
			$gte: fromDate,
			$lte: toDate,
		},
	};

	TemperatureModel.find(filter, defaultView, (err, temperatures) => {
		if (temperatures.length > 0) {
			return res.send(temperatures);
		}
		return res.status(404).send('No temperatures found in range specified.');
	});
});

module.exports = router;
