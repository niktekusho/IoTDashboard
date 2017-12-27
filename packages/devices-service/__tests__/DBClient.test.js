const dbclient = require('../src/DBClient');

describe('DBClient', () => {

	test('connect ok', () => {
		const mongooseMock = {
			connect: jest.fn().mockImplementation((url, opts, cb) => { cb(); }),
			connection: {
				on: jest.fn(),
				once: jest.fn(),
			},
		};
		const params = {
			db: {
				url: 'mongodb://localhost:27017/deviceservice',
			},
		};
		const logger = {
			info: () => undefined,
			error: (err) => err,
		};
		dbclient(mongooseMock, params, logger);
		expect(mongooseMock.connect).toBeCalled();
	});

	test('connect fail', () => {
		const mongooseMock = {
			connect: jest.fn().mockImplementation((url, opts, cb) => { cb('err'); }),
			connection: {
				on: jest.fn(),
				once: jest.fn(),
			},
		};
		const params = {
			db: {
				url: 'mongodb://localhost:27017/deviceservice',
			},
		};
		const logger = {
			info: () => undefined,
			error: (err) => err,
		};
		expect(() => dbclient(mongooseMock, params, logger)).toThrow();
	});

});
