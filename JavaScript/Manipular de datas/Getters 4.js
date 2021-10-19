const dataAtual = new Date();

console.log( dataAtual.getTime() );//Representa quantos milisegundos se passaram desde 1970...ate a data atual
console.log( dataAtual.getTimezoneOffset() );//Para saber a diferença de fuso horário do sistema para o UTC em minutos
console.log( dataAtual.valueOf() );//retorna o timestamp