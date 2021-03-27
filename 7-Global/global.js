//Assim como no browser você tem o objeto global que é o window
//no node você também tem um objeto global que é o global

//console.log(global);

//Deve-se tomar muito cuidado ao acessar objetos globais

globalThis.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares';
  },
  frase: 'Não sou mutável pois estou com o Object.freeze',
});

//Com isso, qualquer arquivo terá acesso à esse arquivo global
