const convert = require('convert-units');

const Setting = require('./Setting');

class SystemUnitDefinition extends Setting {
	static get TemperatureUnitKey() {
		return 'temperature';
	}

	constructor(dbclient) {
		super(dbclient);
		this._getHelper(this, 'temperature', SystemUnitDefinition.TemperatureUnitKey, 'C');
	}

	set Temperature(newTemperatureUnit) {
		const temperatureUnits = convert().possibilities('temperature');
		if (temperatureUnits.includes(newTemperatureUnit)) {
			this._setHelper('temperature', SystemUnitDefinition.TemperatureUnitKey, newTemperatureUnit);
		} else {
			throw new Error('Wrong or unsupported temperature unit.');
		}
	}

	get TemperatureUnits() {
		return convert().list('temperature');
	}

	serialize() {
		return JSON.stringify({
			temperature: this.temperature,
		});
	}
}

module.exports = SystemUnitDefinition;
