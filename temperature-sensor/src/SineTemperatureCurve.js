const TemperatureCurve = require('./TemperatureCurve');

class SineTemperatureCurve extends TemperatureCurve {

	constructor(params, addRandomness) {
		super();
		this.params = params;
		this.addRandomness = addRandomness;
		this.convertToRadians = angle => angle * (Math.PI / 180);
	}

	simulate(hour) {
		const { baseTemperature, sineAmplitudeScale, sineFrequencyScale, sineOffset } = this.params;
		const radians = this.convertToRadians(hour * sineFrequencyScale + sineOffset);
		const sine = Math.sin(radians);
		const functionOutput = sineAmplitudeScale * sine + baseTemperature;
		if (this.addRandomness) {
			return functionOutput + super.randomness();
		}
		return functionOutput;
	}

}

module.exports = SineTemperatureCurve;
