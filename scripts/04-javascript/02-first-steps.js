// EXEMPLO 01
const button = document.querySelector('button');

button.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  button.textContent = `Player 1: ${name}`;
}


// EXEMPLO 02
document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('#exemplo2');
  const botao1 = document.querySelector('#botao1');
  const botao2 = document.querySelector('#botao2');

  function criarParagrafo(botao) {
  const paragrafo = document.createElement('p');
  paragrafo.textContent = `Você clicou no botão ${botao.textContent} e criou um parágrafo!`;
  section.appendChild(paragrafo);
  }

  botao1.addEventListener('click', function() {
    criarParagrafo(botao1);
  })

  botao2.addEventListener('click', function() {
    criarParagrafo(botao2);
  })
})