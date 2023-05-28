let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
  let meuSrc = minhaImagem.getAttribute('src');
  if (meuSrc === 'images/firefox-icon.png') {
    minhaImagem.setAttribute ('src', 'images/imagem2-edit.jpg');
  } else if (meuSrc === 'images/imagem2-edit.jpg') {
    minhaImagem.setAttribute ('src', 'images/imagem3-edit.jpg');
  } else {
    minhaImagem.setAttribute ('src', 'images/firefox-icon.png');
  }
}