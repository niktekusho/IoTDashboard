class TemperatureCurve {

	constructor(params, addRandomness) {
		this.params = params;
		this.addRandomness = addRandomness;
	}

	randomness() {
		// need to get the following percentages:
		// 80% of invocations return 0
		// 10% of invocations return +1
		// 10% of invocations return -1
		const random = Math.random() * 10;
		if (random < 8) {
			return 0;
		}
		if (random < 9) {
			return 1;
		}
		return -1;
	}

	simulate(hour) {
	}
}

module.exports = TemperatureCurve;
