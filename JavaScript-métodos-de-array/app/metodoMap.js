function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro =>{
        
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //...livro (faz uma copia do objeto), preco: (altera um atributo dessa copia do objeto)
    })
    return livrosComDesconto
}