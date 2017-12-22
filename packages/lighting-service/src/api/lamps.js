const Router = require('express').Router;

const LightingDevice = require('../LightData');

function API(mqtt) {
	const router = Router();

	router.get('/', (req, res) => {
		LightingDevice.find({}, (err, lightingDevices) => {
			if (err) {
				res.status(500).send(err);
			}

			return res.send(lightingDevices);
		});
	});

	router.get('/ping', (req, res) => {
		res.send('pong');
	});

	router.get('/device/:deviceId', (req, res) => {
		const deviceId = req.params.deviceId;
		LightingDevice.find({ device: deviceId }, (err, lightingDevices) => {
			if (lightingDevices.length > 0) {
				return res.send(lightingDevices);
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

		LightingDevice.find(filter, (err, lightingDevices) => {
			if (lightingDevices.length > 0) {
				return res.send(lightingDevices);
			}
			return res.status(404).send('No temperatures found in range specified.');
		});
	});

	router.get('/device/:deviceId/switch', (req, res) => {
		const deviceId = req.params.deviceId;
		LightingDevice.find({ device: deviceId }, (err, lightingDevices) => {
			if (lightingDevices.length > 0) {
				const data = {
					device: deviceId,
					cmd: 'switch',
				};
				mqtt.publish('lighting/active', JSON.stringify(data));
				return res.send('ok');
			}
			return res.status(404).send('DeviceId Not found!');
		});
	});

	router.get('/last', (req, res) => {
		LightingDevice.find({}, (err, lightingDevices) => {
			if (err) {
				res.status(500).send(err);
			}

			const map = new Map();

			for (let light of lightingDevices) {
				map.set(light.device, {
					state: light.state, created_at: light.created_at });
			}

			const response = [];
			for (let [lamp, value] of map) {
				response.push({
					device: lamp,
					state: value.state,
					created_at: value.created_at,
				});
			}

			return res.send(response);
		});
	});

	return router;
}

module.exports = API;
