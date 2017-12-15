const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lampSchema = new Schema({
	device: String,
	state: Object,
}, { timestamps: {
	createdAt: 'created_at',
}});

module.exports = mongoose.model('Lamp', lampSchema);
