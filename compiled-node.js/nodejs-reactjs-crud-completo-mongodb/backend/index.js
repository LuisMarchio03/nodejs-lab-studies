const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('./database');

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Routes
const routes = require('./src/routes/filmes.routes');
app.use('/', routes);

// Variables
const port = 3333;

//Iniciando server.
app.listen(port, () => {
  console.log(`Meu servido esta funcionando na porta ${port}`);
});