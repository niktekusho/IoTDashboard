const SineTemperatureCurveFactory = require('../src/SineTemperatureCurveFactory');

test('SineTemperatureCurveFactory constructor', () => {
	const factory = new SineTemperatureCurveFactory();
	expect(factory).toBeDefined();
});

test('SineTemperatureCurveFactory createCurve method', () => {
	const factory = new SineTemperatureCurveFactory();
	const expected = {
		params: undefined,
		addRandomness: undefined,
	};
	expect(factory.createCurve()).toEqual(expected);
});
