const carrinho = [
    {  nome: 'Gears 5', qnt: 1, valor: 199 },
    {  nome: 'Halo: MCC', qnt: 1, valor: 149 },
    {  nome: 'Quantum Break', qnt: 1, valor: 99 }
  ];

function imprimirItem( produto, index ) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;
  
    console.log( texto );
}

carrinho.forEach(imprimirItem);