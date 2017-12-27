const ServiceManager = require('../src/ServiceManager');

test('ServiceManager constructor', () => {
	const clientMock = {
		on: jest.fn(),
		subscribe: jest.fn(),
		publish: jest.fn(),
	};
	const mqttMock = {
		connect: jest.fn().mockReturnValue(clientMock),
	};
	const loggerMock = {
		info: jest.fn(),
		error: jest.fn(),
	};
	const service = new ServiceManager(mqttMock, loggerMock);
	expect(service).toBeDefined();
});

test('ServiceManager connect', () => {
	const message = Buffer.from(JSON.stringify({
		manufacturer: 'test',
		model: 'test',
		revision: 'test',
		deviceClass: 'test',
		deviceId: 'test',
		spec: {
			range: {
				min: 3,
				max: 5,
			},
			zero: 1,
			resolution: 'test',
			frequency: 4,
		},
	}));

	const clientMock = {
		on: jest.fn()
			.mockImplementationOnce((event, cb) => cb())
			.mockImplementationOnce((event, cb) => cb('hw_info', message)),
		subscribe: jest.fn(),
		publish: jest.fn(),
	};
	const mqttMock = {
		connect: jest.fn().mockReturnValue(clientMock),
	};
	const loggerMock = {
		info: jest.fn(),
		error: jest.fn(),
	};
	const service = new ServiceManager(mqttMock, loggerMock);
	service.connect()
		.then(response => expect(response).toEqual(service))
		.catch(err => {
			throw new Error(err);
		});
});
