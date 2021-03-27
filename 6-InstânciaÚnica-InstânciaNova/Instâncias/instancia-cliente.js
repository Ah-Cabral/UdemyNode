//Utilizando as instâncias únicas e comprovando que tanto o contador A
//Quanto o contador B compartilham do mesmo objeto retornado

const contadorA = require('./instancia-unica');
const contadorB = require('./instancia-unica');

//Incrementando duas vezes o valor
contadorA.inc();
contadorA.inc();

//Verificando que o valor de B também mudou
console.log(contadorB.valor);

//Para novas instâncias, é retornada a função factory
const contadorC = require('./instancia-nova')();
const contadorD = require('./instancia-nova')();

//Porém, fazendo o incremento utilizando o valor C
contadorC.inc();

//Nada mudou no contadorD, mas sim apenas no contadorC
console.log(contadorD.valor, contadorC.valor);
