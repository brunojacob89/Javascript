let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi(){
    const res = await fetch(endpointDaAPI)  //await espera por uma promise
    livros = await res.json()
   // console.table(livros)
   let livrosComDesconto = aplicarDesconto(livros) 

    exibirOsLivrosNaTela(livrosComDesconto)
}

