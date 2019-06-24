'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('socket in logger'));

client.on('data', data => {
	let payload = JSON.parse(data.toString().trim());
	console.log(payload);
	if(payload === 'error'){
		console.log('error');
	}
	else if(payload === 'save'){
		console.log(payload);
	}
	else{
		console.log('help me!');
	}
});

client.on('close', () => {
	console.log('connection closed');
});
