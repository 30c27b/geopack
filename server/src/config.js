// Dependencies
const fs = require('fs');
const secrets = require('../secrets.json');

const config = {
	port: Number(secrets.port),
	mongoUrl: secrets.mongoUrl,
}

module.exports = config;
