// importando o modulo mySQL que vai conectar com o banco de dados
const mysql = require('mysql'); 
const database = 'db_filmes';

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: database
});

dbConnection.connect((err) => {
    err 
        ? console.error(`Erro ao tentar conectar ao banco ${database}`)
        : console.log(`Banco ${database} conectado com sucesso!`);
});

module.exports = dbConnection;