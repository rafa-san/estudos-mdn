// MUDAR IMAGENS
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'assets/DomaneAL3Disc-1.jpg') {
    myImage.setAttribute('src', 'assets/DomaneAL3Disc-2.jpg');
  } else {
    myImage.setAttribute('src', 'assets/DomaneAL3Disc-1.jpg');
  }
};

// INCLUIR NOME
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
  const myName = prompt('Por favor, digite seu nome.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Olá, ${myName}! Essa é a Minha Futura Bicicleta.`;
  }
  
}

if (!localStorage.getItem('name')) {
  setUserName();
}   else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Olá, ${storedName}! Essa é a Minha Futura Bicicleta.`;
  }

myButton.onclick = () => {
  setUserName();
};