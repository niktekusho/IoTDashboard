module.exports = {
	automock: false,
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/coverage/**',
		'!jest.config.js',
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'lcov'],
	coverageThreshold: {
		global: {
			branches: 90,
			statements: 80,
		}
	}
};
