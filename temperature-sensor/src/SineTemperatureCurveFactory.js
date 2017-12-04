const TemperatureCurveFactory = require('./TemperatureCurveFactory');
const SineTemperatureCurve = require('./SineTemperatureCurve');

class SineTemperatureCurveFactory extends TemperatureCurveFactory {
	createCurve(params, addRandomness) {
		return new SineTemperatureCurve(params, addRandomness);
	}
}

module.exports = SineTemperatureCurveFactory;
