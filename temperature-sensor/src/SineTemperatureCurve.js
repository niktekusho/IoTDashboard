const TemperatureCurve = require('./TemperatureCurve');

class SineTemperatureCurve extends TemperatureCurve {

	simulate(hour) {
		const { baseTemperature, sineAmplitudeScale, sineFrequencyScale, sineOffset } = this.params;
		const sine = Math.sin(hour * sineFrequencyScale + sineOffset);
		const functionOutput = sineAmplitudeScale * sine + baseTemperature;
		if (this.addRandomness) {
			return functionOutput + super.randomness();
		}
		return functionOutput;
	}

}

module.exports = SineTemperatureCurve;
