const dbSettings = require('../../src/settings/db');

test('DB settings', () => {
	const expected = {
		host: 'localhost',
		port: 27017,
		user: 'root',
		password: 'root',
		db: 'temperatureservice',
		url: 'mongodb://localhost:27017/temperatureservice',
	};

	expect(dbSettings).toEqual(expected);
});
