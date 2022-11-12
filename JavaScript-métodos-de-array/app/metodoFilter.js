//const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
//btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);

const botoes = document.querySelectorAll('.btn') // pega todos os elementos btn
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) // nos elementos adiciona um evento click e chama a funcao filtralivros

function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) // livros veio do arquivo main da funcao getBuscarLivrosDaApi
    // Se categoria(valor do elemento) = disponivel faz um filtro em cima dos livro.quantidade se não  filtra pela categoria
//    console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel'){
        const valorTotal = calcularValorDeLivrsDisponiveis(livrosFiltrados)
        exibeValorTotalDosLivrsDisponivelNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotalDosLivrsDisponivelNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponivel.innerHTML =`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}