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

test('DeviceInfo getters', () => {
	const params = {
		manufacturer: 'test1',
		model: 'test2',
		revision: 'test3',
		deviceClass: 'test4',
		deviceId: 'test5',
	};
	const deviceInfo = new DeviceInfo(params);

	expect(deviceInfo.DeviceClass).toEqual(params.deviceClass);
	expect(deviceInfo.DeviceId).toEqual(params.deviceId);
	expect(deviceInfo.Manufacturer).toEqual(params.manufacturer);
	expect(deviceInfo.Model).toEqual(params.model);
	expect(deviceInfo.Revision).toEqual(params.revision);

});


test('DeviceInfo toJson', () => {
	const params = {
		manufacturer: 'test1',
		model: 'test2',
		revision: 'test3',
		deviceClass: 'test4',
		deviceId: 'test5',
	};
	const deviceInfo = new DeviceInfo(params);
	expect(deviceInfo.toJson(true)).toEqual(JSON.stringify(params, null, '  '));
	expect(deviceInfo.toJson()).toEqual(JSON.stringify(params));
});

test('DeviceInfo setters', () => {
	const params = {
		manufacturer: 'test1',
		model: 'test2',
		revision: 'test3',
		deviceClass: 'test4',
		deviceId: 'test5',
	};
	const deviceInfo = new DeviceInfo(params);
	expect(deviceInfo).toMatchObject(params);
	const newManufacturer = 'abc';
	deviceInfo.Manufacturer = newManufacturer;
	expect(deviceInfo.Manufacturer).toEqual(newManufacturer);
});
