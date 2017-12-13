const TemperatureCurve = require('../src/TemperatureCurve');

test('TemperatureCurve constructor', () => {
  const params = {
    test: '123',
  };
  const curve = new TemperatureCurve(params, true);
  expect(curve.params).toEqual(params);
  expect(curve.addRandomness).toBeTruthy();
});

test('TemperatureCurve randomness', () => {
  const curve = new TemperatureCurve({}, false);
  expect(curve.randomness()).toBeGreaterThanOrEqual(-1);
  expect(curve.randomness()).toBeLessThanOrEqual(1);
});
