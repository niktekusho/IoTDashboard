const ServiceManager = require('../src/ServiceManager');

test('ServiceManager constructor', () => {
	const clientMock = {
		on: jest.fn(),
		subscribe: jest.fn(),
		publish: jest.fn(),
	};
	const loggerMock = {
		info: jest.fn(),
		error: jest.fn(),
	};
	const service = new ServiceManager(clientMock, loggerMock);
	expect(service).toBeDefined();
});

test('ServiceManager start', (done) => {
	const message = Buffer.from(JSON.stringify({
		state: 'test',
		device: 'test',
	}));

	const clientMock = {
		on: jest.fn((event, cb) => cb('lighting', message)),
		subscribe: jest.fn(),
		publish: jest.fn(),
	};
	const loggerMock = {
		info: jest.fn(),
		error: jest.fn(),
	};
	const service = new ServiceManager(clientMock, loggerMock);
	service.start();
	done();
});
