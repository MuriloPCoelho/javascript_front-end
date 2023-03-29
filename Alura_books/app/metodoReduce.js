function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}