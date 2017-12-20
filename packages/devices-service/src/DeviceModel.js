const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
	manufacturer: String,
	model: String,
	revision: String,
	deviceClass: String,
	deviceId: {
		type: String,
		index: true,
		unique: true,
	},
	range: {
		min: Number,
		max: Number,
	},
	zero: Number,
	resolution: String,
	frequency: Number,
}, { timestamps: {
	createdAt: 'created_at',
}});

module.exports = mongoose.model('Device', deviceSchema);
