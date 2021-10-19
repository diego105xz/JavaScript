const dataHoje = new Date();
const validade = new Date();

const mesAtual = dataHoje.getMonth();
validade.setMonth( mesAtual + 6 );

const options = {
  dateStyle: "short"
};

console.log( validade.toLocaleDateString('en-us', options) );