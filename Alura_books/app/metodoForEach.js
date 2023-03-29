const secaoDeLivros = document.querySelector("#livros")
const secaoTotalDeLivrosDisponiveis = document.querySelector("#valor_total_livros_disponiveis")

function exibirLivrosNaTela(listaDeLivros) {
    secaoTotalDeLivrosDisponiveis.innerHTML = ""
    secaoDeLivros.innerHTML = ""
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        secaoDeLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="Capa do livro o Retorno do Cangaceiro JavaScript: De padrões a uma abordagem funcional" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${(livro.preco).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    })
}
