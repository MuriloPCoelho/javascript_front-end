import selecionaCotacao from "./imprimeCotacao.js";

const graficoDolar = document.querySelector("#graficoDolar");

const graficoParaDolar =  new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

function gerarHorario() {
    let data = new Date();
    let horario = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    console.log(horario);

    return horario;
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    });

    grafico.update();
}

let workerDolar = new Worker("./script/workers/workerDolar.js");
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', event => {
    let tempo = gerarHorario();
    let valor = event.data.ask
    console.log(valor)
    selecionaCotacao('dolar', valor);
    adicionarDados(graficoParaDolar, tempo, valor);
})

const graficoIene = document.querySelector('#graficoIene')
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage('iene');
workerIene.addEventListener('message', event => {
    let tempo = gerarHorario()
    let valor = event.data.ask
    adicionarDados(graficoParaIene, tempo, valor)
    selecionaCotacao('iene', valor)
})