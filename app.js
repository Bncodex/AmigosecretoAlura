
let amigos = [];

function adicionarAmigo() {

    let campoNome = document.getElementById('amigo');
    let nome = campoNome.value;


    if (nome.trim() === '') {
        alert("Por favor, insira um nome.");
        return; 
    }
    amigos.push(nome);
    console.log(amigos); 
    campoNome.value = '';

    atualizarListaNaTela();
}

function atualizarListaNaTela() {
    let listaElemento = document.getElementById('listaAmigos');

    listaElemento.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaElemento.appendChild(item);
    }
}

function sortearAmigo() {
    

    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear!");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let nomeSorteado = amigos[indiceAleatorio];

    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<p>O amigo sorteado é: <strong>${nomeSorteado}</strong></p>`;
}