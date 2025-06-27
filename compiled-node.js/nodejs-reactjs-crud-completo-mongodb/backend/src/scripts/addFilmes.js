require('../../database');
const Filme = require('../models/filme');
const filmesJSON = require('../data/filme.json');

const addFilmes = async () => {
  try {
    for (let filmes of filmesJSON) {
      console.log(`Inserindo ${filmes.titulo}`);
      await new Filme(filmes).save();
    }
    console.log('Final do Script');
  } catch (err) {
    console.log(err.message);
  }
};

addFilmes();
