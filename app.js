const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors')
const app = express();
let port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api', routes);

// error handling middleware
app.use(function (err, req, res, next) {
  console.log(err);
  // ‘res.status(422)’->muda o status
  res.status(422).send({ error: err.message });
});

mongoose.connect('mongodb+srv://kallaslimaantunes:NIQYI8gDUEwGpXDe@cluster0.xayk4jk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Confirma ligação no console
mongoose.connection.on('connected', function () {
  console.log('Connected to Database');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

app.listen(process.env.port || port, () => {
  console.log('Servidor em execução em: ' + port);
});