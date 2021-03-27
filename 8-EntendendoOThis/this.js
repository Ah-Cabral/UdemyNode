//Fazendo comparações

//Nesse caso, será retornado false devido ao fato de que
//o this não aponta para o global. O this é igual ao modules.exports,
//que é igual ao exports.
console.log(this === global);

//O this não é igual ao module
console.log(this === module);

//Como dito acima, o this é igual ao exports, que também é igual ao module.exports
console.log(this === exports);

console.log(this === module.exports);

//Relembrando: o motivo deles serem iguais é
//o fato de apontarem para o mesmo objeto

function logThis() {
  console.log('Dentro de uma função..');
  if (this === exports) {
    console.log('This aponta para exports / module.exports');
  } else {
    console.log('This não aponta para exports / module.exports');
  }
  console.log(
    'This, dentro de uma função aponta para global, e fora de uma função, você acessa module.exports',
  );
}

logThis();
