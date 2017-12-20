const Router = require('express').Router;

const devices = require('../DeviceModel');

const router = Router();

router.get('/', (req, res) => {
	devices.find({}, (err, devices) => {
		return res.send(devices);
	});
});

router.get('/device/:deviceId', (req, res) => {
	const deviceId = req.params.deviceId;
	devices.find({ deviceId }, (err, devices) => {
		if (devices.length > 0) {
			return res.send(devices);
		}
		return res.status(404).send('DeviceId Not found');
	});
});

router.get('/classes', (req, res) => {
	devices.distinct('deviceClass', (err, devices) => {
		return res.send(devices);
	});
});

router.get('/classes/:class', (req, res) => {
	const deviceClass = req.params.class;
	devices.find({ deviceClass }, (err, devices) => {
		if (devices.length > 0) {
			return res.send(devices);
		}
		return res.status(404).send('DeviceId Not found');
	});
});

module.exports = router;
