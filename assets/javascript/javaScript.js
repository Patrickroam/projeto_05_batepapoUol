
function pegaDadosAxios(){
    const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages');
    promessa.then(pegaMenssagem);
}
pegaDadosAxios()


function pegaMenssagem(resposta){
    const mensagem = resposta.data;

    const bodyMain = document.querySelector(".bodyMain");
        
        for(let i = 0; i < mensagem.length; i++){
        
            bodyMain.innerHTML += `
            <section class="directMessage">
                <P class="text">
                    <span class="hour">${mensagem[i].time}</span>
                    <strong class="name">${mensagem[i].from}</strong> para<strong class="to"> ${mensagem[i].to}</strong>: ${mensagem[i].text}
                </P>
            </section>`;

            bodyMain.innerHTML += `
            <section class="status-Online">
                <P class="text">
                    <span class="hour">${mensagem[i].time}</span>
                    <strong class="name">${mensagem[i].from}o</strong> entra na sala...
                 </P>
            </section>`;

            bodyMain.innerHTML += `
            <section class="massage-Everyone">
                <P class="text">
                    <span class="hour">${mensagem[i].time}</span>
                    <strong class="name">${mensagem[i].from}</strong> para<strong class="to"> ${mensagem[i].to}</strong>: Bom dia
                </P>
            </section>`;
         
            bodyMain.innerHTML += `
            <section class="status-Offline">
                <P class="text">
                    <span class="hour">${mensagem[i].time}</span>
                    <strong class="name">${mensagem[i].from}</strong> saiu da sala...
                </P>
            </section>`;   

            bodyMain.innerHTML += `
            <section class="reservedMessage">
                <P class="text">
                    <span class="hour">${mensagem[i].time}</span>
                 <strong class="name">${mensagem[i].from}</strong> reservadamente <strong class="to">${mensagem[i].from}</strong>: Oi gatinha quer tc? KKKKKKKKKKKKKKKK
                </P>
            </section>`;   
        }
   
}


