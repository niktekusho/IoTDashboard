const TemperatureData = require('../src/TemperatureData');

test('TemperatureData constructor with no temperature', () => {
	const params = {
		device: 'test',
		unit: 'C',
	};

	expect(() => new TemperatureData(params)).toThrow();
});

test('TemperatureData constructor with no device', () => {
	const params = {
		temperature: 'test',
		unit: 'C',
	};

	expect(() => new TemperatureData(params)).toThrow();
});

test('TemperatureData constructor with no unit', () => {
	const params = {
		device: 'test',
		temperature: 'C',
	};

	expect(() => new TemperatureData(params)).toThrow();
});

test('TemperatureData constructor with int temperature', () => {
	const params = {
		temperature: 23,
		device: 'test',
		unit: 'C',
	};
	const data = new TemperatureData(params);

	expect(data).toMatchObject(params);
});

test('TemperatureData constructor with float temperature', () => {
	const params = {
		temperature: 23.3,
		device: 'test',
		unit: 'C',
	};
	const data = new TemperatureData(params);

	expect(data).toMatchObject(params);
});

test('TemperatureData constructor with string temperature', () => {
	const params = {
		temperature: '23.4',
		device: 'test',
		unit: 'C',
	};
	const data = new TemperatureData(params);
	const result = {
		temperature: 23.4,
		device: 'test',
		unit: 'C',
	};

	expect(data).toMatchObject(result);
});

test('Temperature fromMQQT', () => {
	const msg = {
		device: 'test',
		temperature: 23.4,
		unit: 'C',
	};
	const message = JSON.stringify(msg);
	const data = TemperatureData.fromMQTT(message);

	expect(data).toMatchObject({ device: msg.device, temperature: msg.temperature, unit: msg.unit });
});
