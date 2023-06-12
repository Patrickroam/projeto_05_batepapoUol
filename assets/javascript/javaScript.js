let ultimaMensagem;
let nomeDeUsuario;

function iniciaApp() {
    carregaMensagens();
    setInterval(carregaMensagens, 3000);

    perguntaNome();


}

function carregaMensagens() {
    const promessa = axio.get("https://mock-api.driven.com.br/api/v4/uol/messages")

    promessa.then((resposta) => {
        const mensagens = resposta.data;

        const ulMensagens = document.querySelector(".mensagens-container");
        ulMensagens.textContent = '';

        for (let i = 0; i < mensagens.length; i++) {
            ulMensagens.textContent += mensagem(mensagens[i]);
        }

        scrollarAteAUltimaMensagem();
    });
}

function mensagem(dados) {
    let classeMensagem = '';
    let destinatario = '';

    if (dados.type === 'status') {
        classeMensagem = 'entrada-saida'
    }
    if (dados.type === 'private-message') {
        if (dados.to !== nomeDeUsuario &&
            dados.to !== 'Todos' &&
            dados.from !== nomeDeUsuario) {
            return "";
        }

        classeMensagem = 'conversa-privada';
        destinatario = `<span> para </span>
        <strong>${dados.to}: </strong>`;
    }

    if (dados.type === 'message') {
        classeMensagem = 'conversa-publica';
        destinatario = `<span> para </span>
        <strong>${dados.to}: </strong>`;
    }

    return `
    <li class="${classeMensagem}" data-identifier="message">
            <span class="horario">(${dados.time})</span>
            <strong>${dados.from}</strong>
            ${destinatario}
            <span>${dados.text}</span>
        </li>
    `;
}

function scrollarAteAUltimaMensagem() {
    const ulMensagens = document.querySelector('.mensagens-container');
    const liUltimaMensagem = ulMensagens.lastElementChild;

    if (ultimaMensagem !== liUltimaMensagem) {
        liUltimaMensagem.scrollIntoView();
        ultimaMensagem = liUltimaMensagem;
    }
}