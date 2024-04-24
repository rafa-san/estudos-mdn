// EXEMPLO 01
const mensagem = document.querySelector('.retorno'); 
mensagem.textContent = 'Olá, mundo!'; 

/*
Acima definimos o valor da propriedade textContent para "Olá, mundo!". Poderíamos usar também o innerHTML no lugar do textContent.
*/


// EXEMPLO 02
document.querySelector('#exemplo2').addEventListener('click', function() {
  alert("Ouch! Stop poking me!");
})