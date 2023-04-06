import { Personagem } from "../modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "../modules/mago.js"
import { Arqueiro } from "../modules/arqueiro.js"
import { ArqueiroMago } from "../modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 4, 'gelo', 4, 3)
const magoJairo = new Mago('Jairo', 5, 'fogo', 5, 7)
const arqueiroLegolas = new Arqueiro('Legolas', 10, 10)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'vento', 4, 8)

const personagens = [magoAntonio, magoJairo, arqueiroLegolas, arqueiroMagoChico]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroLegolas, magoAntonio))

