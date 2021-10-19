const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2021 },
  ];
  
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  
  const carrosDoAno = carros.filter( carro => carro.anoFabricacao == anoAtual);// para imprimir somente carro do ano atual
  
  console.log(carrosDoAno);