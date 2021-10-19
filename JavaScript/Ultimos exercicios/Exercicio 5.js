const dataHoje = new Date();
const validade = new Date();

const mesAtual = dataHoje.getMonth();
validade.setMonth( mesAtual + 6 );

const options = {
  dateStyle: "short",
  timeStyle: "long"
};

console.log( mesAtual.toLocaleDateString('pt-br', options) );