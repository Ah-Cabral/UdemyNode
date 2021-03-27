//Uma Factory retorna um novo objeto (uma nova instância)

module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++;
    },
  };
};
