async function buscaEndereco(cep) {
    const mensagemErro = document.querySelector("#erro")
    mensagemErro.innerHTML = ""
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json()

        if(consultaCEPConvertida.erro) {
            throw Error("CEP não existente!")
        }
        console.log(consultaCEPConvertida)
        const endereco = document.querySelector("#endereco")
        const bairro = document.querySelector("#bairro")
        const estado = document.querySelector("#estado")
        const cidade = document.querySelector("#cidade")

        endereco.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        estado.value = consultaCEPConvertida.uf
        cidade.value = consultaCEPConvertida.localidade

    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido. Tente novmanete!</p>"
        console.log(erro)
    }
}

const cep = document.querySelector("#cep")

cep.addEventListener("focusout", () => buscaEndereco(cep.value))
