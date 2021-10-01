const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);//imprime array completo

function ordenaNumeros(a, z){
    return a - z;//ordem crescente 
}

numeros.sort(ordenaNumeros);//Comando de ordenar

console.log("\nArray depois da ordenação:\n");
console.info(numeros);//imprime array completo
console.log("\n");