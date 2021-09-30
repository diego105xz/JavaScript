let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for ( let dados in aluno ) {//for in utilizado para percorrer objetos RECOMENDO DADO PARA PEGAR PROPRIEDADES
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25