//Exportanod uma função que receberá diversos nomes
module.exports = function (...nomes) {
  //E os retornará desejando uma boa semana
  return nomes.map((nome) => `Boa Semana ${nome}`);
};
