let _lamp = null;

class Lamp {
	constructor(data) {
		if(!_lamp) {
			this.data = data;
			this.state = {
				isOn: false,
				powerConsumption: 0,
				colorTemperature: 0,
				lightIntensity: 0,
			};
			_lamp = this;
		}
		else {
			return _lamp;
		}
	}

	switchState() {
		const newState = !this.state.isOn;

		let power = 0, color = 0, light = 0;
		// on
		if (newState) {
			power = this.data.powerConsumption;
			color = this.data.colorTemperature;
			light = this.data.lightIntensity;
		}

		this.state = {
			isOn: !this.state.isOn,
			powerConsumption: power,
			colorTemperature: color,
			lightIntensity: light,
		};
	}

	getState() {
		return this.state;
	}

	static get Instance() {
		return _lamp;
	}
}

module.exports = Lamp;
