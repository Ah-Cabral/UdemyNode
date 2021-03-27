//Nessa aula foram criadas 3 pastas para simular uma situação de projeto

//Com isso, foi importado o módulo A, feito na primeira Aula
const moduloA = require('../../../1-SistemaDeMódulos/ModuloA');
//Preserve SEMPRE o nome dos arquivos

//console.log(moduloA.bemVindo);

//Importando módulo saudação, criado na aula
const saudacao = require('saudacao');
//Imprimindo valor olá do objeto saudação
//console.log(saudacao.ola);

//Importando módulo http (esse módulo é interno do node)
const http = require('http');

//Dentro do create server tem-se uma função callback

/*

http.createServer((req, res) => {
  res.write('Bom dia'); //Que retorna como resposta a string 'Bom dia'
  res.end(); //E finaliza o código
}).listen(8080); O .listen faz com que esse server seja criado na porta desejada, nesse caso a 8080

*/

//Já nesse caso, esse módulo não foi criando dentro do node_modules
//Importando arquivo index dentro da pastaC
const c = require('./PastaC');
console.log(c.dia);
