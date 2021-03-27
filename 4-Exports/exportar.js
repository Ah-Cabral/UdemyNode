console.log(module.exports === this);
console.log(module.exports === exports);

//Exportando a com valor 1
this.a = 1;
//Exportando b com valor 2
exports.b = 2;
//Exportando c com valor 3
module.exports.c = 3;

//Definindo o exports como null
exports = null;

//O que acontece é que, mesmo definindo o exports como null,
//devido ao fato do this, exports
//e module.exports apontarem para o mesmo objeto
//todas as propriedades estão sendo armazenadas
//no mesmo endereço de memória e a única coisa que será retornada será
//o module.exports
console.log('Nesse caso será apenas retornado o');

exports = {
  nome: 'Teste',
};

console.log(module.exports);

console.log('Já aqui, com o module.exports trocado.. retorna-se o');

//O objeto com a propriedade nome é o que será retornado, no fim
//é o module.exports

module.exports = {
  publico: true,
};
