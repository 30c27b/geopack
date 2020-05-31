// Dependencies
const tls = require('tls');
const config = require('./config');

// Server setup
const opt = {
	key: config.key,
	cert: config.cert
}
const server = tls.createServer(opt, socket => {
});

server.listen(config.port);
