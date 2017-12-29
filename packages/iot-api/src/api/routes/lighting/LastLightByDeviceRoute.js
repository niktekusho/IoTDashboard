const LightingRoute = require('./LightingRoute');

class LastTemperaturesByDeviceRoute extends LightingRoute {
	method() {
		return 'get';
	}

	endpoint() {
		return super.endpoint() + '/device/:deviceId/last';
	}

	routeFunction(req, res) {
		const url = `${this.lightingService}/device/${req.params.deviceId}`;
		this.request.get(url, (error, response) => {
			if (error) {
				return res.status(500).send(error);
			}

			const lamps = JSON.parse(response.body);
			const lastTenReadings = lamps.slice(lamps.length - 50, lamps.length);

			this.requestDeviceInfo(req.params.deviceId)
				.then((deviceInfo) => {
					const obj = {
						device: deviceInfo,
						readings: lastTenReadings,
					};
					res.send(obj);
				})
				.catch(err => res.status(500).send(err));
		});
	}
}

module.exports = LastTemperaturesByDeviceRoute;
