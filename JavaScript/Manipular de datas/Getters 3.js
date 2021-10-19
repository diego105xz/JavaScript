let dataAtual = new Date();

//Todos os Retorno são baseados no horario UTC
console.log( dataAtual.getUTCFullYear() );//Retorna o Ano 
console.log( dataAtual.getUTCMonth() );//Retorna o mês de 0 a11
console.log( dataAtual.getUTCDate() );//Retorna o dia
console.log( dataAtual.getUTCHours() );//Retorna a hora de 0 a 23
console.log( dataAtual.getUTCMinutes() );//Retorna os minutos de 0 a 59
console.log( dataAtual.getUTCSeconds() );//Retorna os segundos de 0 a 59
console.log( dataAtual.getUTCMilliseconds() );//Retorna os milisegundos de 0 a 999
console.log( dataAtual.getUTCDay() );//Retorna o dia da semana de 0 a 6