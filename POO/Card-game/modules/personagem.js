export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    tipo
    descricao

    constructor(nome, descricao) {
        this.nome = nome
        this.#level = 1
        this.descricao = descricao
    }

    get level() {
        return this.#level
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }

        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.#level === personagem2.#level) {
            return "Empate!"
        }
        if (personagem1.#level > personagem2.#level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }
        if (personagem2.#level > personagem1.#level) {
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
        }
    }
}