const functionParams = require('../../src/settings/function-params');

test('Function parameters as default', () => {
  const expected = {
    sineFrequencyScale: 10,
  	baseTemperature: 20,
  	sineAmplitudeScale: 3,
  	sineOffset: 10,
  };
  expect(functionParams).toEqual(expected);
});
