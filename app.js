const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

mongoose
  .connect('mongodb://localhost:27017/aroundb')
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6a7a7466b20cccf7a6a1565b',
  };
  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({
    message: 'Recurso requisitado não encontrado',
  });
});

app.use((err, req, res, _next) => {
  console.error('Erro:', err);

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      message: 'Dados inválidos',
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'ID inválido',
    });
  }

  if (err.name === 'DocumentNotFoundError') {
    return res.status(404).json({
      message: 'Recurso não encontrado',
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: 'Ocorreu um erro no servidor',
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
