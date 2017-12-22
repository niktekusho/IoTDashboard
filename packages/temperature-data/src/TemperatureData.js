class TemperatureData {
	constructor({ temperature, device, unit }) {
		const errorMsg = 'Object is missing required property';

		if (!temperature) {
			throw new Error(`${errorMsg}: temperature`);
		}

		if (!device) {
			throw new Error(`${errorMsg}: device`);
		}

		if (!unit) {
			throw new Error(`${errorMsg}: unit`);
		}

		if (typeof temperature === 'string') {
			this.temperature = parseFloat(temperature);
		} else {
			this.temperature = temperature;
		}
		this.device = device;
		this.unit = unit;
	}

	static fromMQTT(message) {
		let payload = message;
		if (Buffer.isBuffer(message)) {
			payload = message.toString();
		}
		payload = JSON.parse(payload);

		return new TemperatureData(payload);
	}
}

module.exports = TemperatureData;
