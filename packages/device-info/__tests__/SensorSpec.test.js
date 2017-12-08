const SensorSpec = require('../src/SensorSpec');

test('SensorSpec constructor with correct params', () => {
	const params = {
		range: {
			min: 0,
			max: 4.3,
		},
		zero: 0,
		resolution: 0.1,
		frequency: 1,
	};
	const spec = new SensorSpec(params);

	expect(spec).toMatchObject(params);
});

test('SensorSpec constructor without range/with range malformed', () => {
	const params = {
		range: {
			min: 0,
		},
		zero: 0,
		resolution: 0.1,
		frequency: 1,
	};

	expect(() => new SensorSpec(params)).toThrow();
});

test('SensorSpec constructor with string zero', () => {
	const params = {
		range: {
			min: 0,
			max: 4.3,
		},
		zero: '0',
		resolution: 0.1,
		frequency: 1,
	};
	const spec = new SensorSpec(params);

	expect(spec.Zero).toEqual(parseFloat(params.zero));
});

test('SensorSpec constructor with string resolution', () => {
	const params = {
		range: {
			min: 0,
			max: 4.3,
		},
		zero: 0,
		resolution: '0.1',
		frequency: 1,
	};
	const spec = new SensorSpec(params);

	expect(spec.Resolution).toEqual(parseFloat(params.resolution));
});

test('SensorSpec constructor with string frequency', () => {
	const params = {
		range: {
			min: 0,
			max: 4.3,
		},
		zero: 0,
		resolution: 0.1,
		frequency: '1',
	};
	const spec = new SensorSpec(params);

	expect(spec.Frequency).toEqual(parseFloat(params.frequency));
});

test('SensorSpec getters', () => {
	const params = {
		range: {
			min: 0,
			max: 4.3,
		},
		zero: 0,
		resolution: 0.1,
		frequency: 1,
	};
	const spec = new SensorSpec(params);

	expect(spec.Range).toEqual(params.range);
	expect(spec.Zero).toEqual(params.zero);
	expect(spec.Resolution).toEqual(params.resolution);
	expect(spec.Frequency).toEqual(params.frequency);
});
