// Dependencies
const fs = require('fs');
const conf = require('./config.json');

const config = {
	key: fs.readFileSync(conf.key_path),
	cert: fs.readFileSync(conf.cert_path),
	port: Number(conf.port)
}

module.exports = config;
