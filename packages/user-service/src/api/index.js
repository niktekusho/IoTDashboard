const Router = require('express').Router;

const UserData = require('../model/UserData');

const router = Router();

function initialize(dbClient) {
	this.userData = new UserData(dbClient);

	router.get('/', (req, res) => {
		res.send(this.userData.serialize());
	});

	router.post('/', (req, res) => {
		this.userData.Name = req.body.name;
		try {
			this.userData.Units = req.body.units;
		} catch(error) {
			return res.status(406).send(error.message);
		}

		return res.send('ok');
	});

	router.get('/temperature', (req, res) => {
		const response = {
			current: this.userData.units.temperature,
			possibilities: this.userData.units.TemperatureUnits,
		};
		res.send(response);
	});

	return router;
}

module.exports = initialize;
