const deviceSettings = require('../../src/settings/device-info');

test('Settings as expected', () => {
  const expectedSettings = {
    manufacturer: 'unknown',
  	model: 'unknown',
  	revision: 'unknown',
  	deviceClass: 'temperature',
  	range: {
  		min: -10,
  		max: 50,
  	},
  	zero: 0,
  	resolution: 0.001,
  	frequency: 1,
  };
  delete deviceSettings.deviceId;
  expect(deviceSettings).toEqual(expectedSettings);
});
