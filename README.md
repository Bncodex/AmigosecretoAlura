# AmigosecretoAlura# Projeto Amigo Secreto

Um sorteador simples de Amigo Secreto construído com HTML, CSS e JavaScript puro, como parte de um exercício de manipulação do DOM.

## Recursos

* **Adicionar Amigos:** Permite inserir nomes em um campo de texto e adicioná-los a uma lista.
* **Validar Entrada:** Verifica se o campo de nome não está vazio antes de adicionar.
* **Listagem Dinâmica:** Exibe todos os amigos adicionados na tela em tempo real.
* **Sorteio:** Realiza um sorteio aleatório simples, selecionando **um** nome da lista de participantes.

## Tecnologias Utilizadas

Este projeto foca nos fundamentos do desenvolvimento web "vanilla" (sem frameworks):

* **HTML5:** Para a estrutura da página (inputs, botões, listas `<ul>`).
* **CSS3:** Para a estilização visual (seu arquivo `style.css`).
* **JavaScript (Puro):** Para toda a lógica e interatividade.

### Detalhes da Lógica (JavaScript)

O arquivo `app.js` é o cérebro da aplicação e utiliza:

* **Arrays:** Um array (`let amigos = []`) é usado para armazenar a lista de nomes.
* **Manipulação do DOM:**
    * `document.getElementById()` para capturar os elementos do HTML (inputs, listas, botões).
    * `.value` para ler o que foi digitado.
    * `.innerHTML` e `createElement('li')` para criar e atualizar a lista de amigos na tela.
* **Eventos:** Funções são disparadas através do atributo `onclick` nos botões do HTML.
* **Funções Principais:**
    * `adicionarAmigo()`: Valida a entrada (`.trim()`) e adiciona o nome ao array (`.push()`).
    * `atualizarListaNaTela()`: Limpa a lista antiga e recria todos os itens (`<li>`) a partir do array.
    * `sortearAmigo()`: Usa `Math.random()` e `Math.floor()` para calcular um índice aleatório e exibir o nome sorteado.

## Como Usar

1.  Clone este repositório (ou apenas baixe os arquivos).
2.  Abra o arquivo `index.html` no seu navegador.
3.  Digite os nomes dos participantes e clique em "Adicionar".
4.  Quando todos os nomes estiverem na lista, clique em "Sortear amigo".
