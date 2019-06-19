'use strict';

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
module.exports = exports = {};
function toUpp(data){
  data = Buffer.from(data);
  return data.toString().toUpperCase();
}

exports.writeFile = writeFile;
exports.readFile = readFile;
exports.toUpp = toUpp;

