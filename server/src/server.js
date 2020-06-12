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
		console.log('data: ' + data.toString())
		const state = data.toString().split(' ');
		if (state.length != 6) {
			console.log('bad data');
			return;
		}
		state.map(value => Number(value));
		State.create({
			time: state[0],
			latitude: state[1],
			longitude: state[2],
			altitude: state[3],
			speed: state[4],
			satellites: state[5],
		}).then(doc => {
			console.log('created doc: ' + doc);
		}).catch(err => {
			console.log(err);
		});
	});
});

server.listen(config.port);
