const Device = require('../src/DeviceModel');

test('DeviceModel missing args', () => {
	const testDevice = new Device();

	testDevice.validate(err => expect(err).toBeDefined());
});

test('DeviceModel args', () => {
	const params = {
		manufacturer: 'test',
		model: 'test',
		revision: 'test',
		deviceClass: 'test',
		deviceId: 'testststs',
		range: {
			min: 1,
			max: 5,
		},
		zero: 1,
		resolution: '000',
		frequency: 3,
	};
	const testDevice = new Device(params);

	testDevice.validate(err => expect(err).toBeNull());
});
