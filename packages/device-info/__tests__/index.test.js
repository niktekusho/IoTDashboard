const lib = require('../src');

test('Classes are present', () => {
	expect(lib.DeviceInfo).toBeDefined();
	expect(lib.SensorSpec).toBeDefined();
});
