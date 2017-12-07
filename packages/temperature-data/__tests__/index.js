const TemperatureData = require('../src/TemperatureData');

test('TemperatureData constructor with int temperature', () => {
	const params = {
		temperature: 23,
		device: 'test',
	};
	const data = new TemperatureData(params);

	expect(data).toMatchObject(params);
});

test('TemperatureData constructor with float temperature', () => {
	const params = {
		temperature: 23.3,
		device: 'test',
	};
	const data = new TemperatureData(params);

	expect(data).toMatchObject(params);
});

test('TemperatureData constructor with string temperature', () => {
	const params = {
		temperature: '23.4',
		device: 'test',
	};
	const data = new TemperatureData(params);
	const result = {
		temperature: 23.4,
		device: 'test',
	};

	expect(data).toMatchObject(result);
});

test('TemperatureData constructor with no temperature', () => {
	expect(() => new TemperatureData()).toThrow();
});

test('TemperatureData getters', () => {
	const params = {
		temperature: 23.4,
		device: 'test',
	};
	const data = new TemperatureData(params);

	expect(data.Device).toEqual(params.device);
	expect(data.Temperature).toEqual(params.temperature);
});

test('Temperature fromMQQT', () => {
	const msg = {
		device: 'test',
		temperature: 23.4,
	};
	const params = {
		topic: 'temperature',
		message: JSON.stringify(msg),
	};
	const data = TemperatureData.fromMQTT(params);

	expect(data).toMatchObject({ device: msg.device, temperature: msg.temperature });
});
