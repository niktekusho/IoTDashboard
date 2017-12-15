const deviceOperations = require('../src/device-operations');

test('Operations as expected', () => {
	expect(deviceOperations).toHaveProperty('operations');
});

test('Operations have one operation defined', () => {
	const operations = deviceOperations.operations;
	expect(operations).toHaveLength(1);
});

test('Only operation is Switch', () => {
	const operation = deviceOperations.operations[0];
	expect(operation).toHaveProperty('name', 'Switch');
});
