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
			this.client.subscribe('shutdown');
			this.client.on('message', (topic, message) => {
				if (topic === 'shutdown') {
					this.stop();
				}
			});
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
		process.exit();
	}

	publish() {
		const temperature = this.getTemperature();
		if (this.connected) {
			this.client.publish('temperature', temperature.toString());
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
