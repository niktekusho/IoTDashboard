class DeviceInfo {
	constructor({manufacturer, model, revision, deviceClass, deviceId}) {
		this.manufacturer = manufacturer;
		this.model = model;
		this.revision = revision;
		this.deviceClass = deviceClass;
		this.deviceId = deviceId;
	}

	get Manufacturer() {
		return this.manufacturer;
	}

	get Model() {
		return this.model;
	}

	get Revision() {
		return this.revision;
	}

	get DeviceClass() {
		return this.deviceClass;
	}

	get DeviceId() {
		return this.deviceId;
	}

	get SensorSpec() {
		return this.spec;
	}

	set SensorSpec(spec) {
		this.spec = spec;
	}

	toJson(pretty) {
		if (pretty) {
			return JSON.stringify(this, null, '  ');
		}
		return JSON.stringify(this);
	}
}

module.exports = DeviceInfo;
