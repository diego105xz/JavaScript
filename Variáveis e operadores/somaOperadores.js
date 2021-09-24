console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + false); // "textofalse"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

//valores
//true = 1
//false = 0
//null = 0
//undefined = NaN (Não é um número)

//Operação de atribuição
//Exemplo 1
var preco1 = 10;
preco1 = preco1 + 20;
console.log(preco1);
//resultado é 30

//Exemplo 2
var preco2 = 10;
preco2 += 20;
console.log(preco2);
//resultado é 30