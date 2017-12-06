const dotenv = require('dotenv');
const mosca = require('mosca');
const pino = require('pino');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const settings = require('./setttings');

const logger = pino();

const server = new mosca.Server(settings);

function setup() {
	logger.info(`Mosca server running on port: ${settings.port}`);
}

server.on('ready', setup);

function onClientConnection(client) {
	logger.info(`Client connected with id: ${client.id}`);
}

function onClientDisconnection(client) {
	logger.info(`Client disconnected with id: ${client.id}`);
}

server.on('clientConnected', onClientConnection);
server.on('clientDisconnected', onClientDisconnection);

server.on('published', (message, client) => {
	logger.info(`client: ${client} msg: ${message.payload.toString()}`);

	// if (message.topic === 'random') {
	// 	console.log(message.payload.toString());
	// }
});
