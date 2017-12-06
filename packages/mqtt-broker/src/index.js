const mosca = require('mosca');

const settings = require('./setttings');

const server = new mosca.Server(settings);

function setup() {
	console.log(`Mosca server running on port: ${settings.port}`);
}

server.on('ready', setup);

function onClientConnection(client) {
	console.log(`Client connected with id: ${client.id}`);
}

function onClientDisconnection(client) {
	console.log(`Client disconnected with id: ${client.id}`);
}

server.on('clientConnected', onClientConnection);
server.on('clientDisconnected', onClientDisconnection);

server.on('published', (message, client) => {
	console.log(`client: ${client} msg: ${message.payload.toString()}`);

	// if (message.topic === 'random') {
	// 	console.log(message.payload.toString());
	// }
});
