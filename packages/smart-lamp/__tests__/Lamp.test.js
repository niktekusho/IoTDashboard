const Lamp = require('../src/Lamp');

describe('Lamp tests', () => {
	let testLamp = null;
	const data = {
		powerConsumption: 1,
		colorTemperature: 1,
		lightIntensity: 1,
	};

	beforeAll(() => testLamp = new Lamp(data));

	test('Lamp to be singleton', () => {
		const lamp1 = Lamp.Instance;
		expect(lamp1).toEqual(testLamp);
	});

	test('Lamp initial getState', () => {
		const expected = {
			isOn: false,
			powerConsumption: 0,
			colorTemperature: 0,
			lightIntensity: 0,
		};
		expect(testLamp.getState()).toEqual(expected);
	});

	test('Lamp switchState off -> on', () => {
		testLamp.switchState();
		const expected = {
			isOn: true,
			powerConsumption: 1,
			colorTemperature: 1,
			lightIntensity: 1,
		};
		expect(testLamp.getState()).toEqual(expected);
	});

	test('Lamp switchState on -> off', () => {
		testLamp.switchState();
		const expected = {
			isOn: false,
			powerConsumption: 0,
			colorTemperature: 0,
			lightIntensity: 0,
		};
		expect(testLamp.getState()).toEqual(expected);
	});

});
