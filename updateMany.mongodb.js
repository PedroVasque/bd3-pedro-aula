/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* ALTERA OS DADOS DE TODOS OS DOCUMENTO DA COLLECTION */
db[collection].updateMany(
    {autor: "J.R.R Tolkien"},

    {$set: {autor: "Jonh Ronald Reuel Tolkien"}}

);