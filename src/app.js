const express = require('express'); // importa o express
const app = express();              // inicializa o express
const port = 3000;

const filmesRouter = require('./routes/filmesRouter');
const usuariosRouter = require('./routes/usuariosRouter');
const avaliacaoRouter = require('./routes/avaliacaoRouter');

app.use('/', filmesRouter);
app.use('/', usuariosRouter);
app.use('/', avaliacaoRouter);

app.get('/', (request, response) => {
    response.send('UwU');
});

// configurando a porta do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
