function calcularValorDeLivrsDisponiveis(livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2) // primeiro indice começa com 0
}