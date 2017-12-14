const TemperatureCurveFactory = require('../src/TemperatureCurveFactory');

test('TemperatureCurveFactory constructor', () => {
	const factory = new TemperatureCurveFactory();
	expect(factory).toBeDefined();
});

test('TemperatureCurveFactory createCurve method', () => {
	const factory = new TemperatureCurveFactory();
	expect(factory.createCurve()).toBe(undefined);
});
