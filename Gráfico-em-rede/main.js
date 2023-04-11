const main = document.querySelector('body')
// const bgGrafic = document.querySelector('.bg_grafic')
// const grafic = document.querySelector('.grafic')

class Grafic {
  size
  color
  itensNumber

  constructor(size, color, itensNumber) {
    this.size = size
    this.color = color
    this.itensNumber = itensNumber
  }

  build(parent) {
    const bgGrafic = document.createElement("div")
    bgGrafic.className = 'bg_grafic'
    bgGrafic.style.height = `${this.size}px`
    bgGrafic.style.width = `${this.size}px`

    const grafic = document.createElement("div")
    grafic.className = 'grafic'
    grafic.style.height = `${this.size}px`
    grafic.style.width = `${this.size}px`
    grafic.style.backgroundColor = `#${this.color}50`
    grafic.style.clipPath = this.calculateVertex(this.itensNumber, grafic)
    //console.log(this.calculateVertices(this.itensNumber))

    bgGrafic.appendChild(grafic)
    parent.appendChild(bgGrafic)
  }

  calculateVertex(sides, parent) {
    let clipPath = ``
    for(let i = 0; i < sides; i++) {
      if(i + 1 === sides) {
        clipPath += `calc(50% + ${this.size / 2}px * cos(${360/sides * i}deg)) calc(50% + ${this.size / 2}px * sin(${360/sides * i}deg))`
        continue
      }
      
      clipPath += `calc(50% + ${this.size / 2}px * cos(${360/sides * i}deg)) calc(50% + ${this.size / 2}px * sin(${360/sides * i}deg)),`
      
    }
    
    return `polygon(${clipPath})`
  }

}

const grafico = new Grafic(400, "fefefe", 6)
grafico.build(main)
