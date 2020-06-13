// Dependencies
const fs = require('fs');
const secrets = require('../secrets.json');

const config = {
	port: Number(secrets.port),
	mongoUrl: secrets.mongoUrl,
	key: fs.readFileSync(secrets.sslKeyPath),
	cert: fs.readFileSync(secrets.sslCertPath)
}

module.exports = config;
