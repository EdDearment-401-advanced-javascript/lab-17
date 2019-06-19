'use strict';

const alter = require('./fileHandler/alter');
const net = require('net');
const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('socket in app.js created'));

const alterFile = (file) => {
  alter.readFile(file)
    .then(data => {
      data = alter.toUpp(data);
      alter.writeFile(file,data);
    })
    .then(client.write(payload('saved')))
    .catch( error => {
      client.write(payload('error'));
    });
}

function payload(event){
  let payload = {
    name: event,
    data: `A ${event} just happened`,
  };
  return JSON.stringify(payload);
}

let file = process.argv.slice(2).shift();
alterFile(file);

client.on('close', () => {
  console.log('Connection to app socket closed!');
});