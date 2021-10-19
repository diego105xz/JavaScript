const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2021 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2021 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];
  
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  
  const carrosDoAno = carros.filter( carro => carro.anoFabricacao == anoAtual);

  console.log(carrosDoAno);