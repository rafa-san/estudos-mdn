const icone = document.getElementById('menu-icone');

icone.addEventListener('click', menuResponsivo);

function menuResponsivo() {
  // const icone = document.getElementById('menu-icone');
  const menuLateral = document.getElementById('menu-lateral');
  menuLateral.classList.toggle('largura');

  icone.classList.toggle("mudar");

  if (icone.title === 'Abrir Menu Lateral') {
    icone.title = 'Fechar Menu Lateral';
  } else {
    icone.title = 'Abrir Menu Lateral';
  }
}