const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temperatureSchema = new Schema({
	temperature: Number,
	device: String,
	unit: String,
}, { timestamps: {
	createdAt: 'created_at',
}});

module.exports = mongoose.model('Temperature', temperatureSchema);
