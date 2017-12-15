const ActiveDeviceOperationDescriptor = require('../src/ActiveDeviceOperationDescriptor');

test('ActiveDeviceOperationDescriptor object', () => {
	const arg = {
		name: 'test',
		args: {
			a: 1,
			b: '2',
			c: true,
		},
	};
	const obj = new ActiveDeviceOperationDescriptor(arg);
	expect(obj).toEqual(arg);
});
