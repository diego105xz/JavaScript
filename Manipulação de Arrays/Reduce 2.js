const jogos = [
    {id: 1 , nome: 'Top Guear', ano_lancamento:1997},
    {id: 2, nome:'Super Mario World', ano_lancamento: 1995},
    {id: 3, nome: 'Pac-Man', ano_lancamento:1986}
];

function retornnaNomesJogos(nomes, jogo){
    return nomes + jogo.nome + ', ';
}

const nomesJogos = jogos.reduce(retornnaNomesJogos, '');//reduz em 1 linha o array
console.log(nomesJogos.slice(0, -2));//Retirna carteres do final da string