const convert = require('convert-units');

class UnitsConverter {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}

	convert(value) {
		return convert(value).from(this.from).to(this.to);
	}
}

module.exports = UnitsConverter;
