const moduleDB = '../../src/settings/db';

test('DB Settings', () => {
	const dbSettings = require(moduleDB);
	expect(dbSettings).toBeDefined();
});
