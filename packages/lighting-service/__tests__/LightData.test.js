const LampModel = require('../src/LampModel');

test('LampModel missing args', () => {
	const testDevice = new LampModel();

	testDevice.validate(err => expect(err).toBeDefined());
});

test('LampModel args', () => {
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
	const testDevice = new LampModel(params);

	testDevice.validate(err => expect(err).toBeNull());
});
