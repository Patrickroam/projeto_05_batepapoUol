function iniciaApp() {
    carregaMensagens();
    setInterval(carregaMensagens, 3000);

    perguntaNome();


}

function carregaMensagens() {
    const promessa = axio.get("https://mock-api.driven.com.br/api/v4/uol/messages")

    promessa.then((resposta) => {
        const mensagem = resposta.data;
    })
}