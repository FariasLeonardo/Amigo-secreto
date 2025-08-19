// declaração de variáveis globais
let amigos = [];
let amigosDisponiveis = [];
let listaDeAmigos = document.getElementById("listaAmigos");
let nomeSorteado = document.getElementById("resultado");

// aciona a função adicionarAmigo apertando enter
document.getElementById("amigo").addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

// função para adicionar amigo
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo");

    if (nomeAmigo.value.trim() === '') {
        alert("Por favor, insira um nome válido.")
    } else {
        amigos.push(nomeAmigo.value.trim());
        amigosDisponiveis = amigos.slice();
        nomeAmigo.value = '';
        atualizarListaAmigos();
    }

}

// função para atualizar lista de amigos
function atualizarListaAmigos() {

    listaDeAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        listaDeAmigos.innerHTML += `<li> ${amigos[i]} </li>`;
    }

}

// função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert(' Adicione pelo menos 2 amigos para começar.');
        return;
    }
   

    if (amigosDisponiveis.length === 0 ) {

        alert('Todos os amigos já foram sorteados. Reiniciando o sorteio.');
        amigosDisponiveis = amigos.slice();
        
    } 

    // esconde a lista de amigos na tela
    listaDeAmigos.style.display = 'none';

    let indiceAleatorio = Math.floor(Math.random() * amigosDisponiveis.length);

    //inicia o display com o nome e a contagem regressiva
    nomeSorteado.innerHTML = `
        <h3> O amigo secreto sorteado é: </h3>
        <p class = "nome-sorteado">${amigosDisponiveis[indiceAleatorio]}</p>
        <p class="contagem-regressiva"></p>
        `;

    // Inicia o cronômetro
    iniciarContagemRegressiva(2);

    //remove o nome sorteado do array
    amigosDisponiveis.splice(indiceAleatorio, 1);
    console.log(amigos);
    console.log(amigosDisponiveis);

}


function iniciarContagemRegressiva(tempo) {
    const timer = setInterval(() => {
        if (tempo > 0) {
            nomeSorteado.querySelector('.contagem-regressiva').textContent = `Você tem ${tempo} segundos para anotar.`;
            tempo--;
        } else {
            clearInterval(timer);
            nomeSorteado.innerHTML = '';
            listaDeAmigos.style.display = 'block';
            atualizarListaAmigos();
        }
    }, 1000);

}




