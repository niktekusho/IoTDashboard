const Setting = require('./Setting');
const SystemUnitDefinition = require('./SystemUnitDefinition');

class UserData extends Setting {
	static get UsernameKey() {
		return 'username';
	}

	constructor(dbClient) {
		super(dbClient);
		this._getHelper(this, 'name', UserData.UsernameKey);
		this.units = new SystemUnitDefinition(dbClient);
	}

	set Name(name) {
		if(name) {
			this._setHelper('name', UserData.UsernameKey, name);
		}
	}

	set Units(units) {
		if (units) {
			this.units.Temperature = units.temperature;
		}
	}

	serialize() {
		return JSON.stringify({
			name: this.name,
			units: this.units.serialize(),
		});
	}
}

module.exports = UserData;
