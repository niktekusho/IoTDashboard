const settings = require('../../src/settings');

test('settings as expected', () => {
  const matchedSettings = {
    host: 'localhost',
  	port: 1883,
  	device: {},
  };
  expect(settings).toMatchObject(matchedSettings);
});
