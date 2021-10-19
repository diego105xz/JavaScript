const contas = [
    { titulo: 'luz', valor: 200, vencimento: 1606816110437},
    { titulo: 'internet', valor: 120, vencimento: 1606816110437},
  ];
  
  const hoje = new Date();
  
  const contasComData = contas.map((conta) => {
    const dataVencimento = new Date(conta.vencimento);
    conta.vencimento = dataVencimento;
  
    return conta;
  });
  
  contasComData.forEach(conta => {
    let texto = conta.titulo + ' - ' ;
    texto += conta.valor + ' - '
    texto += conta.vencimento.toLocaleDateString();
  
    console.log(texto);
  });