class SensorSpec {
	constructor({ range, zero, resolution, frequency }) {
		if (range.min == null || range.max == null) {
			throw new Error('Range format is not valid. It must be: {min:#, max:#}');
		}
		this.range = range;

		if (typeof zero === 'string') {
			this.zero = parseFloat(zero);
		} else {
			// does not matter if zero is undefined
			this.zero = zero;
		}

		if (typeof resolution === 'string') {
			this.resolution = parseFloat(resolution);
		} else {
			// does not matter if resolution is undefined
			this.resolution = resolution;
		}

		if (frequency && typeof frequency === 'string') {
			this.frequency = parseFloat(frequency);
		} else if (frequency && typeof frequency === 'number') {
			this.frequency = frequency;
		} else {
			throw new Error('Frequency is not defined or not in a valid format.');
		}
	}

	get Range() {
		return this.range;
	}

	get Zero() {
		return this.zero;
	}

	get Resolution() {
		return this.resolution;
	}

	get Frequency() {
		return this.frequency;
	}
}

module.exports = SensorSpec;
