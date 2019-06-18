'use strict';

const fs = require('fs');
const net = require('net');
const client = new net.Socket();
const reader = require('./fileHandler/readFile');
const toUp = require('./fileHandler/toUp');
const writer = require('./fileHandler/writeFile');
const event = require('./events/emit');

client.connect(3001, 'localhost', () => console.log('socket in app.js created'));

const events = ['create', 'update', 'read', 'delete'];


const alterFile = file => {
  reader(file)
    .then(data => {
      writer(file, Buffer.from(toUp(data)))
    })
    .then(event.emit('log', 'saved'))
    .catch(event.emit('error','log'));
}


// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

let file = process.argv.slice(2).shift();
alterFile(file);
