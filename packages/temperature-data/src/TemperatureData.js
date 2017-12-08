class TemperatureData {
	constructor({ temperature, device = 'nd' }) {
		if (!temperature) {
			throw new Error('Temperature required');
		}
		if (typeof temperature === 'string') {
			this.temperature = parseFloat(temperature);
		} else {
			this.temperature = temperature;
		}
		this.device = device;
	}

	static fromMQTT(message) {
		let payload = message;
		if (Buffer.isBuffer(message)) {
			payload = message.toString();
		}
		payload = JSON.parse(payload);

		return new TemperatureData(payload);
	}

	get Temperature() {
		return this.temperature;
	}

	get Device() {
		return this.device;
	}
}

module.exports = TemperatureData;
