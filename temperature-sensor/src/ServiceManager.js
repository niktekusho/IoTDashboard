const SineTemperatureCurveFactory = require('./SineTemperatureCurveFactory');

class ServiceManager {

	constructor(mqtt) {
		this.mqtt = mqtt;
		this.curveFactory = new SineTemperatureCurveFactory();
		this.hour = 0;
		this.connected = false;
	}

	connect(brokerUrl) {
		return new Promise((resolve, reject) => {
			this.client = this.mqtt.connect(brokerUrl);
			this.client.on('connect', () => {
				resolve(this);
				this.connected = true;
			});
			// setTimeout(reject, 5000);
		});
	}

	initialize(params, addRandomness) {
		this.temperatureCurve = this.curveFactory.createCurve(params, addRandomness);
		return this;
	}

	start() {
		this.interval = setInterval(this.publish.bind(this), 1000);
	}

	stop() {
		clearInterval(this.interval);
	}

	publish() {
		const temperature = this.getTemperature();
		if (this.connected) {
			// TODO
		} else {
			console.log(temperature);
		}
	}

	getTemperature() {
		if (this.hour === 24) {
			this.hour = 0;
		} else {
			this.hour += 1;
		}

		return this.temperatureCurve.simulate(this.hour);
	}
}

module.exports = ServiceManager;
