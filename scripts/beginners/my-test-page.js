// Alteração das imagens ao serem clicadas

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../images/firefox-icon-1.png') {
    myImage.setAttribute ('src','../images/firefox-icon-2.jpeg');
  } else {
    myImage.setAttribute ('src','../images/firefox-icon-1.png');
  }
}

/*
1) let myImage = document.querySelector('img');: Aqui, estamos selecionando a primeira imagem (tag <img>) que o navegador encontrar na página e a armazenando na variável myImage.

2) myImage.onclick = function() { ... }: Estamos adicionando um evento de clique à imagem selecionada. Quando a imagem é clicada, a função entre chaves { ... } é executada.

3) let mySrc = myImage.getAttribute('src');: Estamos armazenando o valor do atributo src da imagem na variável mySrc. O atributo src geralmente contém o caminho para a imagem que está sendo exibida.

4) if(mySrc === '../images/firefox-icon-1.png') { ... }: Aqui, estamos verificando se o caminho da imagem atual é '../images/firefox-icon-1.png'.

5) myImage.setAttribute ('src','../images/firefox-icon-2.jpeg');: Se a imagem atual for '../images/firefox-icon-1.png', então estamos mudando o atributo src para '../images/firefox-icon-2.jpeg', alterando a imagem exibida.
Caso contrário, se o caminho da imagem atual não for '../images/firefox-icon-1.png', estamos revertendo para essa imagem.
*/



// Mensagem de boas-vindas

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*
1) let myButton = document.querySelector('button');: Estamos selecionando o primeiro botão (<button>) encontrado na página e armazenando-o na variável myButton.

2) let myHeading = document.querySelector('h1');: Estamos selecionando o primeiro cabeçalho (<h1>) encontrado na página e armazenando-o na variável myHeading.

3) function setUserName() { ... }: Esta é uma função que solicita ao usuário que insira seu nome por meio do comando prompt. Se o usuário não inserir um nome, a função é chamada novamente até que um nome válido seja inserido.

4) if(!localStorage.getItem('name')) { ... } else { ... }: Aqui, estamos verificando se há um nome armazenado no armazenamento local do navegador. Se não houver, chamamos a função setUserName() para solicitar ao usuário que insira seu nome. Se houver um nome armazenado, exibimos uma mensagem de boas-vindas personalizada com o nome armazenado.

5) myButton.onclick = function() { setUserName(); }: Estamos adicionando um evento de clique ao botão. Quando o botão é clicado, a função setUserName() é chamada para solicitar ao usuário que insira seu nome.

***

"localStorage" armazena os valores de forma persistente no navegador. Isso significa que, uma vez que você guarda um valor usando localStorage.setItem(), ele permanece lá mesmo depois de fechar o navegador ou reiniciar o computador.

Esses dados só são removidos se o usuário limpar o cache do navegador, ou se o seu código especificamente pedir para removê-los usando localStorage.removeItem() ou localStorage.clear().
*/