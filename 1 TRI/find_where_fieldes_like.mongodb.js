/* NOME DO BANCO DE DADOS */
const database = 'BD3-PEDRO-AULA'

/* NOME DO BANCO DE DADOS */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

db[collection].find(
                     {"descricao":/robôs/i},
                     {"_id":0, "codigo":0}
                    ) 

