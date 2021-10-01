import entradaDados from 'readline-sync';//entradaDados o nome da importação e readline-sync é o plugin
const nome = entradaDados.question('Digite seu nome: ');//Função

console.log('Olá, '+nome);//Imprima