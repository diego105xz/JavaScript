var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];

console.log(funcionarios);

// [ 'Bárbara', 'Carlos', 'Helena', 'Maria', 'Rogério' ]

var novos_funcionarios = [
    "Guilherme",
    "Jéssica"
];

funcionarios[0] = novos_funcionarios[1]; //Trocando Indice 0 Barbara por indice 1 Jessica
funcionarios[4] = novos_funcionarios[0]; //Trocando Indice 4 Rogerio por indice 0 Guilherme

console.log(funcionarios);

// [ 'Jéssica', 'Carlos', 'Helena', 'Maria', 'Guilherme' ]