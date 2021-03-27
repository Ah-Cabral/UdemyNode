//O npm (node package manager) é o responsável por baixar
//bibliotecas de terceiros.

//Nessa aula foi instalada a biblioteca lodash
//npm i lodash

//É muito comum utilizar underline para criar uma referência para lodash

const _ = require('lodash');
//Com isso ele procura dentro do node_modules e o index.js

setInterval(() => console.log(_.random(1, 2)), 1000);

//Também foi instalada globalmente a dependência nodemon
//npm i -g

//O Nodemon executa o código da mesma forma que o node, mas o atualiza
//automaticamente sempre que ele é mudado, pegando a versão mais nova do código

//o rs faz um restart do código
