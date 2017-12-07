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

	static fromMQTT(mqtt) {
		const { topic, message } = mqtt;
		const payload = JSON.parse(message);
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
