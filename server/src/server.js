// Dependencies
const net = require('net');
const mongoose = require('mongoose');
const config = require('./config');
const State = require('./lib/models/State');

mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const server = net.createServer(socket => {
	console.log("new connection");
	socket.on('data', data => {
		console.log("received data: " + data.toString());
	});
});

server.listen(config.port);
