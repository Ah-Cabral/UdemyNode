//Em Node, um arquivo representa um módulo

//Arquivos JS são módulos independentes, eles são visíveis
//apenas dentro do módulo

//Exportando em node utilizando objeto this
this.ola = 'Fala Pessoal';

//Exportando em node utilizando o objeto exports
exports.bemVindo = 'Bem vindo ao node';

//Exportando utilizando module.exports
module.exports.ateLogo = 'Até a próxima';

//Os três acima são basicamente a mesma coisa
//sendo feita de um modo diferente
