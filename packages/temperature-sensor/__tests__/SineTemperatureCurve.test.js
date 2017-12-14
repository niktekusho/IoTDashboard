const SineTemperatureCurve = require('../src/SineTemperatureCurve');

test('SineTemperatureCurve constructor', () => {
  const params = {
    test: '123',
  };
  const curve = new SineTemperatureCurve(params, true);
  expect(curve.params).toEqual(params);
  expect(curve.addRandomness).toBeTruthy();
});

test('SineTemperatureCurve simulate without randomness', () => {
	const formula = (hour, amplitude, frequency, offset, base) => amplitude * Math.sin(frequency * hour + offset) + base;
	const params = {
		baseTemperature: 20,
		sineAmplitudeScale: 1,
		sineFrequencyScale: 1,
		sineOffset: 0,
	};
	const curve = new SineTemperatureCurve(params, false);

	const zero = formula(0, params.sineAmplitudeScale, params.sineFrequencyScale, params.sineOffset, params.baseTemperature);
	const one = formula(1, params.sineAmplitudeScale, params.sineFrequencyScale, params.sineOffset, params.baseTemperature);

	expect(curve.simulate(0)).toEqual(zero);
	expect(curve.simulate(1)).toEqual(one);
});

test('SineTemperatureCurve simulate with randomness', () => {
	const formula = (hour, amplitude, frequency, offset, base) => amplitude * Math.sin(frequency * hour + offset) + base;
	const params = {
		baseTemperature: 20,
		sineAmplitudeScale: 1,
		sineFrequencyScale: 1,
		sineOffset: 0,
	};
	const curve = new SineTemperatureCurve(params, true);

	const zero = formula(0, params.sineAmplitudeScale, params.sineFrequencyScale, params.sineOffset, params.baseTemperature);
	const one = formula(1, params.sineAmplitudeScale, params.sineFrequencyScale, params.sineOffset, params.baseTemperature);

	expect(curve.simulate(0)).toBeLessThanOrEqual(zero + 1);
	expect(curve.simulate(0)).toBeGreaterThanOrEqual(zero - 1);
	expect(curve.simulate(1)).toBeLessThanOrEqual(one + 1);
	expect(curve.simulate(1)).toBeGreaterThanOrEqual(one - 1);
});
