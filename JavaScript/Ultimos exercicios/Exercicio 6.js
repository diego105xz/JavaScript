const validaCampo = (campo) => {

    if ( campo.nome.length > 0) {
      console.log('Campo ' + campo.nome +' válido');
    } else {
      console.log('Campo ' + campo.nome +' inválido');
    }
  }
  
  const campos = [
    { nome: 'usuario', valor: 'jjcarvalho' },
    { nome: 'senha', valor: 'barcoquebradonaoafundanaareia' }
  ];
  
  campos.forEach(validaCampo);