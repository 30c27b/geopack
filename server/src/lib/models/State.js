// Dependencies
const mongoose = require('mongoose');

// Schema
const schema = new mongoose.Schema({
	time: { type: Date, required: true },
	longitude: { type: String, required: true },
	latitude: { type: String, required: true },
	altitude: { type: String, required: true },
	speed: { type: String, required: true },
	satellites: { type: String, required: true },
});

schema.set('timestamps', true);
schema.set('collection', 'states');

module.exports = mongoose.model('State', schema);
