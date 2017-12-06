const DeviceInfo = require('../src/DeviceInfo');

test('DeviceInfo constructor with param object', () => {
	const params = {
		manufacturer: 'test1',
		model: 'test2',
		revision: 'test3',
		deviceClass: 'test4',
		deviceId: 'test5',
	};
	const deviceInfo = new DeviceInfo(params);

	expect(deviceInfo).toMatchObject(params);
});

test('DeviceInfo constructor with multiple primitive params', () => {
	const params = {
		manufacturer: 'test1',
		model: 'test2',
		revision: 'test3',
		deviceClass: 'test4',
		deviceId: 'test5',
	};
	const deviceInfo = new DeviceInfo({ params });

	expect(deviceInfo).toMatchObject(params);
});
