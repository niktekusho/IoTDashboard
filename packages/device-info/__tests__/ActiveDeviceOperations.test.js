const ActiveDeviceOperations = require('../src/ActiveDeviceOperations');

test('ActiveDeviceOperations construction', () => {
	const obj = new ActiveDeviceOperations();
	// test that operations array exists and that is empty
	expect(obj).toHaveProperty('operations', []);
});

test('ActiveDeviceOperations add', () => {
	const obj = new ActiveDeviceOperations();
	// test that operations array exists and that is empty
	expect(obj).toHaveProperty('operations', []);
	// add operation
	obj.addOperation({a: 1});
	expect(obj).toHaveProperty('operations', [{a: 1}]);
});

test('ActiveDeviceOperations clear', () => {
	const obj = new ActiveDeviceOperations();
	// test that operations array exists and that is empty
	expect(obj).toHaveProperty('operations', []);
	// add operation
	obj.addOperation({a: 1});
	expect(obj).toHaveProperty('operations', [{a: 1}]);
	// add operation
	obj.addOperation({b: '2'});
	expect(obj).toHaveProperty('operations', [{a: 1}, {b: '2'}]);

	// clear
	obj.clearOperations();
	expect(obj).toHaveProperty('operations', []);
});

test('ActiveDeviceOperations remove last', () => {
	const obj = new ActiveDeviceOperations();
	// test that operations array exists and that is empty
	expect(obj).toHaveProperty('operations', []);
	// add operation
	obj.addOperation({a: 1});
	expect(obj).toHaveProperty('operations', [{a: 1}]);
	// add operation
	obj.addOperation({b: '2'});
	expect(obj).toHaveProperty('operations', [{a: 1}, {b: '2'}]);

	// removeLast
	obj.removeLastOperation();
	expect(obj).toHaveProperty('operations', [{a: 1}]);

	// removeLast
	obj.removeLastOperation();
	expect(obj).toHaveProperty('operations', []);

});

test('ActiveDeviceOperations to Json', () => {
	const obj = new ActiveDeviceOperations();
	// test that operations array exists and that is empty
	expect(obj).toHaveProperty('operations', []);
	// add operation
	obj.addOperation({a: 1});

	expect(obj.toJson()).toEqual(JSON.stringify([{a: 1}]));
});
