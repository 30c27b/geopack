// Dependencies
const net = require('net');
const tls = require('tls');
const mongoose = require('mongoose');
const config = require('./config');
const State = require('./lib/models/State');

mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const server = net.createServer(socket => {
	console.log('new connection');
	socket.on('data', data => {
		console.log('new data: ' + data.toString())
		const state = data.toString().split(' ');
		if (state.length != 6) {
			console.log('invalid data');
			return;
		}
		State.create({
			time: Date(state[0] * 1000),
			latitude: Number(state[1]),
			longitude: Number(state[2]),
			altitude: Number(state[3]),
			speed: Number(state[4]),
			satellites: Number(state[5]),
		}).then(doc => {
			console.log('created doc: ' + doc);
		}).catch(err => {
			console.log(err);
		});
	});
});

server.listen(config.port);
