const tecnologias = [
  { nome: "C#", tipo: "Linguagem" },
  { nome: ".NET Core", tipo: "Framework" },
  { nome: "Spring", tipo: "Framework" },
];

//Todos os 3 códigos funcionam para percorrer o array

//Código 1
for (const tec of tecnologias) {
  console.log(tec.tipo + ' ' + tec.nome);
}

//Código 2
tecnologias.forEach(tec => {
  console.log(tec.tipo + ' ' + tec.nome);
});

//Código 3
for ( let i = 0 ; i < tecnologias.length ;i++ ) {
  console.log(tecnologias[i].tipo + ' ' + tecnologias[i].nome);
}