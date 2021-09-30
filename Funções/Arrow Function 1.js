const retorna_media = (nota_1, nota_2) => {//Essa Função pode utilizar com ou sem parametros.

    let media = (nota_1 + nota_2) / 2;
    return media;
}

let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);