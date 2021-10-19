const retornaIntensidade = (intensidade) => {
    let grauIntensidade = 0;
  
    switch (intensidade) {
      case 'Fraca': grauIntensidade = 1; break;
      case 'Média': grauIntensidade = 2; break;
      case 'Forte': grauIntensidade = 3; break;
  
      default: grauIntensidade = 0; break;
    }
  
    return grauIntensidade;
  }