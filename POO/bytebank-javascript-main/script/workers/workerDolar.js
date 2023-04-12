async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const conectaTraduzido = await conecta.json();
    console.log(conectaTraduzido.USDBRL)
    postMessage(conectaTraduzido.USDBRL);
}

addEventListener('message', () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})
