const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach(botao => {
    botao.addEventListener("click", (e) => {
        manipulaDados(botao.dataset.controle, botao.parentNode)
        atualizaEstatisticas(botao.dataset.controle, botao.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "+") {
        peca.value = Number(peca.value) + 1 
    } else if (operacao === "-") {
        if(Number(peca.value) > 0) {
            peca.value = Number(peca.value) - 1
        }
    }
}

function atualizaEstatisticas(operacao, peca) {
    estatisticas.forEach(atributo => {
        if(operacao === "+") {
            atributo.textContent = Number(atributo.textContent) + pecas[peca][atributo.dataset.estatistica]
        } else if (operacao === "-") {
            atributo.textContent = Number(atributo.textContent) - pecas[peca][atributo.dataset.estatistica]
        }

    })
}
