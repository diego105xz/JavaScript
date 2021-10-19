const produtos = [
  { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
  { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
  { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
];

function imprimirProduto (produto, i) {
  console.log( i + ' - ' + produto.nome );
}

produtos.forEach(imprimirProduto);//Executa um afuncao para cada elemento do array
