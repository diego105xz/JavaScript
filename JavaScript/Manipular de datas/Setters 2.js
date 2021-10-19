//Setters é utilizado para alterar uma data

const dataAtual = new Date("2020-11-09 01:05:09");
console.log(dataAtual.toDateString());
// Impressão: Mon Nov 09 2020

dataAtual.setTime(886302309000);//SetTime altera o Timestamp da data
console.log(dataAtual.toDateString());
// Impressão: Sun Feb 01 1998