const dataAtual = new Date();//data atual
const dataPostagem = new Date('2020-11-11T00:00');//data da postagem

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;//Conversão de milisegundos para segundos
const minutos = segundos / 60;//Conversão de segundos para minutos
const horas = minutos / 60;//Conversão de minutos para horas

// Exibindo a diferença
console.log("A Postagem foi feita há " + horas.toFixed(2));//toFixed 2 casas depois da virgula