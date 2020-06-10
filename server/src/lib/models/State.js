// Dependencies
const mongoose = require('mongoose');

// Schema
const schema = new mongoose.Schema({
	time: { type: Date, required: true },
	longitude: { type: Number, required: true },
	latitude: { type: Number, required: true },
	altitude: { type: Number, required: true },
	speed: { type: Number, required: true },
	satellites: { type: Number, required: true },
});

schema.set('timestamps', true);
schema.set('collection', 'states');

module.exports = mongoose.model('State', schema);
