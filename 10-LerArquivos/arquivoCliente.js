//Const fs que irá armazenar o módulo file system do próprio node
const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

//Leitura Síncrona...

//                   Passasse o caminho  E o tipo de Encode Utilizado
const conteudo = fs.readFileSync(caminho, 'utf-8'); //Utilizando readFileSync para ler um arquivo de forma sícrona

//Pedindo para ler o conteúdo do documento
console.log(conteudo);

//Leitura Assíncrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo); //Passando para object
  console.log(`${config.db.host}:${config.db.port}`);
}); //Nesse caso, ao inves de receber a resposta como conteúdo, é passada uma callback
