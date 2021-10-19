const livros = [
    { titulo: 'O hobbit', autor: 'J. R. R. Tolkien', bestSeller: true },
    { titulo: 'O morro dos ventos uivantes', autor: 'Emily Bronte', bestSeller: false },
    { titulo: 'The secret', autor: 'Rhonda Byrne', bestSeller: false },
    { titulo: 'A garota do Lago', autor: 'Charlie Donlea', bestSeller: true },
    { titulo: 'Pessoas normais', autor: 'Sally Rooney', bestSeller: true },
  ];
  
  const resumirLivro = livro => {
    let resumo = livro.titulo + ' - ' + livro.autor;
  
    if ( livro.bestSeller ) {
      resumo += ' - BEST SELLER';
    }
  
    return resumo;
  }
  
  const livrosResumo = livros.map(resumirLivro);
  
  for (const livro of livrosResumo) {
    console.log(livro);
  }
