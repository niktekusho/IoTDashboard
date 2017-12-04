const SineTemperatureCurveFactory = require('./SineTemperatureCurveFactory');

class ServiceManager {

	constructor(mqtt) {
		this.mqtt = mqtt;
		this.curveFactory = new SineTemperatureCurveFactory();
		// console.log(Object.getOwnPropertyNames(this.curveFactory));
		// console.log(SineTemperatureCurveFactory.prototype);
	}

	connect(brokerUrl) {
		return new Promise((resolve, reject) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => resolve());
			setTimeout(reject, 5000);
		});
	}

	start(params, addRandomness) {
		this.interval = setInterval(this.publishFunction, params.sensorFrequency, params, addRandomness);
	}

	stop() {
		clearInterval(this.interval);
	}

	publishFunction(params, addRandomness) {
		if (this.temperatureCurve == null) {
			// console.log(this.curveFactory);
			this.temperatureCurve = this.curveFactory.createCurve(params, addRandomness);
		}
		this.temperatureCurve.simulate();
	}
}

module.exports = ServiceManager;
