const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
  titulo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  capa: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  descricao: {
    type: Object,
    required: true,
  },
  generos: {
    type: Array,
    required: true,
  },
  elenco: {
    type: Array,
    required: true,
  },
  cenas_momentos: {
    type: Array,
    required: true,
  }
})

module.exports = Filme;