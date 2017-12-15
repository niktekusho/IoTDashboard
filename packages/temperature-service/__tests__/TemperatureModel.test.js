const mockingoose = require('mockingoose').default;
const TemperatureModel = require('../src/TemperatureModel');

describe('Temperature mongoose model', () => {

	beforeEach(() => mockingoose.resetAll());

	test('validate test', () => {
		const temperature = new TemperatureModel({
			temperature: 22,
			device: 'dsafdas1',
		});

		temperature.validate().then(() => {
			expect(temperature.toObject()).toHaveProperty('temperature');
			expect(temperature.toObject()).toHaveProperty('device');
		});
	});

	test('find test', () => {
		mockingoose.Temperature.toReturn([
			{
				temperature: 21.3,
				device: 'dsadsadsa',
			},
			{
				temperature: 22,
				device: 'dsadsadsa',
			},
		]);

		return TemperatureModel.find().then((result) => {
			expect(result).toHaveLength(2);
			expect(result[0].toObject()).toHaveProperty('_id');
			expect(result[0].toObject()).toMatchObject({ temperature: 21.3, device: 'dsadsadsa' });
			expect(result[0]).toBeInstanceOf(TemperatureModel);
		});
	});

});
