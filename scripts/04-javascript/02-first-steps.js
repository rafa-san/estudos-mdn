// EXEMPLO 01
const button = document.querySelector('#exemplo01 button');

button.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  button.textContent = `Player 1: ${name}`;
}


// EXEMPLO 02
function exemplo02(botaoExemplo02) {
  const exe02 = document.createElement('p');
  exe02.textContent = `Você clicou no botão ${botaoExemplo02.textContent}!`;
  section02.appendChild(exe02);
}

const section02 = document.querySelector('#exemplo02');
const botao01 = document.querySelector('#botao1');
const botao02 = document.querySelector('#botao2');

botao01.addEventListener('click', function() {
  exemplo02(botao01);
})

botao02.addEventListener('click', function() {
  exemplo02(botao02);
})


// EXEMPLO 03
function exemplo03() {
  const exe03 = document.createElement('p');
  exe03.textContent = `Você criou um parágrafo!`;
  section03.appendChild(exe03);
}

const section03 = document.querySelector('#exemplo03');
const botoesExemplo03 = document.querySelectorAll('#exemplo03 button');

for (const botaoExemplo03 of botoesExemplo03) {
  botaoExemplo03.addEventListener('click', exemplo03);
}