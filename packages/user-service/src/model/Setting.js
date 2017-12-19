class Setting {
	constructor(client) {
		this.client = client;
	}

	_setHelper(property, dbKey, value) {
		this[property] = value;
		this.client.set(dbKey, value);
	}

	_getHelper(obj, property, dbKey, defaultValue) {
		this.client.get(dbKey, (err, reply) => {
			if (err) {
				throw new Error(err);
			}
			obj[property] = reply || defaultValue;
			// set default in db only if key is not defined and a default value is provided
			if (!reply && defaultValue) {
				this.client.set(dbKey, defaultValue);
			}
		});
	}

	serialize(){}
}

module.exports = Setting;
