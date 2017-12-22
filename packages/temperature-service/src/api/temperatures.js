const Router = require('express').Router;

const TemperatureModel = require('../TemperatureModel');

const router = Router();

const defaultView = 'device temperature created_at';

router.get('/', (req, res) => {
	TemperatureModel.find({}, defaultView, (err, temperatures) => {
		return res.send(temperatures);
	});
});

router.get('/ping', (req, res) => {
	res.send('pong');
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

router.get('/last', (req, res) => {
	TemperatureModel.find({}, (err, temperatures) => {
		if (err) {
			res.status(500).send(err);
		}

		const map = new Map();

		for (let temperature of temperatures) {
			map.set(temperature.device, {
				temperature: temperature.temperature, created_at: temperature.created_at });
		}

		const response = [];
		for (let [sensor, value] of map) {
			response.push({
				device: sensor,
				temperature: value.temperature,
				created_at: value.created_at,
			});
		}

		return res.send(response);
	});
});

module.exports = router;
