//Importando o módulo A

//Fazendo a requisição (importação) do módulo A e do módulo B
const moduloA = require('./ModuloA');

const moduloB = require('./ModuloB');

//Nesses casos, foi necessário utilizar o caminho relativo

//Utilizando o módulo A
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);

//Utilizando o módulo B
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite);
