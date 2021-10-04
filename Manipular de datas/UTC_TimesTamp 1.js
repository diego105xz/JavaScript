const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );//data com fuso horario

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );//UTC é uma data sem fuso horario.

// Imprimindo timestamp 
console.log( hoje.valueOf() );//time stamp é uma data UTC convertida para numero