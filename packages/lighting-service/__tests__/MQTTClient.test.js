const MQTTClient = require('../src/MQTTClient');

test('MQTT Client', (done) => {
	const loggerMock = {
		info: jest.fn(),
		error: jest.fn(),
	};
	const client = MQTTClient(loggerMock);
	expect(client).toBeDefined();
	client.end();
	done();
});
