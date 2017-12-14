const settings = require('../../src/settings');

test('Settings', () => {
	const mqtthost = 'localhost';
	const mqttport = 1883;
	const apiport = 3000;
	expect(settings.host).toEqual(mqtthost);
	expect(settings.port).toEqual(mqttport);
	expect(settings.api_port).toEqual(apiport);
	expect(settings.db).toBeDefined();
});
