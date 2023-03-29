const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = []

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
    const resposta = await fetch(endpointDaApi)
    livros = await resposta.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}
