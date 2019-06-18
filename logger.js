'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('socket in logger'));

client.on('data', data => {
	let payload = JSON.parse(data.toString().trim());
	console.log(payload);
});

client.on('close', () => {
	console.log('connection closed');
});