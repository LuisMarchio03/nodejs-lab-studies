const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

// emitter.on('log', (message) => {
//   fs.appendFile('./log.txt', message, (err) => {
//     if (err) throw err;
//   })
// });

//! __dirname = Direitorio atual.

emitter.on('log', (message) => {
  fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
    if (err) throw err;
  })
});

function log(message) {
  emitter.emit('log', message);
}

log('Minha nova mensagem');

module.exports = log;

