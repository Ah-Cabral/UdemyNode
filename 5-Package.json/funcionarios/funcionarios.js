const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
//O axios é um client http que faz requisições
//para obter informações de algo que está remoto (no nosso caso, a url que está no servidor da coder)
const axios = require('axios');

//Const chineses, que retornará todos os funcionários residentes na china
const chineses = (f) => f.pais === 'China';

//Const mulheres, que retornará todas as funcionárias mulheres
const mulheres = (f) => f.genero === 'F';

//Const mulheres, que retornará todas as funcionárias mulheres
const topic = (f) => f.empresa === 'Topicshots';

//Const menor salário
const menorSalario = (func, funcAtual) => {
  //Que irá fazer a comparação entre dois funcionários e retornar o de menor salário
  return func.salario < funcAtual.salario ? func : funcAtual;
};

//Uitlizando get para obter informações do servidor
axios.get(url).then((response) => {
  const funcionarios = response.data;
  console.log(funcionarios);

  //O Desafio é encontrar, dentro desse arquivo json,
  //a mulher chinesa com o menor salário

  //Constante funcionário
  const func = funcionarios
    //Que irá filtrar os chineses
    .filter(chineses)
    //E irá filtrar as mulheres
    .filter(mulheres)
    //E reduzir para apenas a funcionária que tem essas características e tem o menor salário
    .reduce(menorSalario);

  console.log(func);

  const func2 = funcionarios.filter(topic).reduce(menorSalario);

  console.log(
    'Agora, o funcionário que trabalha na Topicshots e tem o menor salário é:',
  );

  console.log(func2.nome);
});
