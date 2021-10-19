let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {//Enquanto contador for menor que o Array Execute o comando

    let funcionario = funcionarios[contador];//Variavel para percorrer os elementos o array

    if( funcionario.habilitado == true ){//Se funcionario for Habilitado
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);//Imprima funcionario Habilitado encontrado
        encontrouHabilitado = true;
        break;//loop é iterrompindo saindo do bloco while   
    }

    contador++;
}

if (!encontrouHabilitado) {//Se não encontrar o funcionario vai entrar esse comando
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan