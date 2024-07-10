let listaDeNumerosSorteados = [];

//numeroSecretoMod define o maior numero possivel a ser sorteado.

let numeroSecretoMod = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroSecretoMod}`);
}

function exibirToothlessDancante() {
    document.getElementById('toothlessdancing').src = './img/toothlessdancing.gif';
}


exibirMensagemInicial();

console.log (numeroSecreto);

function verificarChute() {
    let numeroChute = document.querySelector('input').value;

    if (numeroChute == numeroSecreto) {
        exibirToothlessDancante();
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroChute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto e menor!')
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior!')
        }
        tentativas ++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroSecretoMod + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroSecretoMod) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados)
        return numeroSorteado;
    }
}

function limparCampo() {
    numeroChute = document.querySelector('input');
    numeroChute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log (numeroSecreto);
}