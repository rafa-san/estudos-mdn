let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

/*
Primeiro, nós invocamos Math.random(), que gera um número decimal aleatório entre 0 e 1, ex. 0.5675493843.

Em seguida, passamos o resultado invocando Math.random() através de  Math.floor(), que arredonda o número passado para o menor número inteiro mais próximo. E então adicionamos 1 ao resultado:

Math.floor(Math.random()) + 1

Arredondando um número decimal aleatório entre 0 e 1 para baixo irá sempre retornar 0, então adicionando 1 a ele sempre retornará 1. Precisamos multiplicar o número aleatório por 100 antes de o arredondarmos para baixo. O código seguinte nos daria um número aleatório entre 0 and 99:

Math.floor(Math.random()*100);

Por isso, queremos adicionar 1, para nos dar um número aleatório entre 1 e 100:

Math.floor(Math.random()*100) + 1;
*/

const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');

const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReinicio;

campoPalpite.focus();

/*
Aqui estamos setando as variáveis que precisamos para guardar os dados que nosso programa irá utilizar.

À primeira variável — numeroAleatorio — é atribuído um número aleatório entre 1 e 100, calculado usando um algoritmo matemático.

As próximas três variáveis são criadas para guardar uma referência para os parágrafos resultantes em nosso HTML, e são usadas para inserir valores nos parágrafos no código:

As próximas duas variáveis armazenam referências para o campo de texto e o botão de envio e são usados para controlar o envio do palpite.

As últimas duas variáveis (contagemPalpites e botaoReinicio) são usadas para armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão reset, que não existe ainda (mas irá existir).
*/

function conferirPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  palpites.textContent += palpiteUsuario + ' ';
  
  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = 'Parabéns! Você acertou!';
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
  } else if (contagemPalpites === 6) {
    ultimoResultado.textContent = 'Fim de Jogo!!!';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.backgroundColor = 'red';
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite foi baixo!';
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite foi alto!';
    }
  }
  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
}

/*
A primeira linha (linha 26 no código acima) declara uma variável chamada palpiteUsuario e define seu valor igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido Number(), apenas para ter certeza de que o valor inserido é um número.

Em seguida, encontramos nosso primero bloco de código condicional (linhas 27–29 no código acima). Um bloco de código condicional lhe permite executar código seletivamente, dependendo se uma condição é verdadeira ou não. Se parece um pouco com uma função, mas não é. A forma mais simples de um bloco condicional começa com a palavra chave if, depois os parênteses, depois as chaves. Dentro dos parênteses nós incluímos um teste. Se o teste retornar true(verdadeiro), o código dentro das chaves é executado. Caso contrário, não é executado, e seguimos para a próxima parte do código. Neste caso, o teste está verificando se a variável contagemPalpites é igual a 1 (isto é, se essa é ou não a primeira tentativa do jogador):
Se a condição for verdadeira, nós tornamos o conteúdo do parágrafo de palpites, <p class="palpites"></p> igual a "Palpites anteriores: ". Caso contrário, o texto não é exibido.

A linha 30 acrescenta o valor atual de palpiteUsuario ao final do parágrafo palpites, mais um espaço em branco para que haja espaçamento entre cada palpite mostrado.

O próximo bloco (linhas 32–47 acima) fazem as seguintes conferências:
O primeiro if(){ } confere se o palpite do jogador é igual ao número aleatório (numeroAleatorio) definido no topo do nosso JavaScript. Se for, o jogador adivinhou corretamente o número e venceu o jogo. Então mostramos ao jogador uma mensagem de parabenização com uma agradável cor verde, limpamos o conteúdo do parágrado que informa sobre o palpite ser alto ou baixo <p class="baixoOuAlto"></p>, e executamos uma função chamada configFimDeJogo(), que iremos discutir mais tarde.

Agora nós encadeamos outro teste ao final deste anterior usando uma estrutura else if(){ }. Este confere se o palpite do jogador é sua última tentativa. Se for, o programa faz o mesmo que no bloco anterior, porém com uma mensagem de fim de jogo ao invés do texto de parabeninzação.

O bloco final encadeado ao final do código (else { }) contém código que só é executado se nenhum dos outros dois testes retornar verdadeiro (ou seja, o jogador não acertou o número, porém ainda tem mais tentativas restantes). Neste caso nós dizemos a ele que está errado, e então rodamos outro teste condicional para checar se o palpite foi maior ou menor do que a resposta certa, exibindo então uma mensagem apropriada para informá-lo se foi maior ou menor.

As próximas três linhas da função (linhas 51–53) nos deixa preparados para o próximo palpite ser submetido. Nós somamos 1 à variável contagemPalpites para que o jogador use sua tentativa (++ é uma operação de incremento — incrementa em 1), e o campo de texto do formulário de inserção seja esvaziado e focado novamente, pronto para que o próximo palpite seja inserido.
*/

envioPalpite.addEventListener('click', conferirPalpite);

/* 
Aqui nós estamos adicionando um event listener ao botão envioPalpite. Esse é um método que aceita a inserção de dois valores (chamados de argumentos) — o tipo de envento que estamos monitorando (neste caso o evento click) como um string (sequência de texto), e o código que queremos executar quando o evento ocorrer (neste caso a função conferirPalpite() — note que não temos que especificar os parênteses quando estivermos escrevendo dentro de addEventListener()).
*/

function configFimDeJogo () {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Iniciar novo jogo';
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
}

/*
As primeiras duas linhas desabilitam a entrada de texto do formulário e o clique do botão, definindo a propriedade disabled (desabilitado) de cada um como true (verdadeiro). Isso é necessário, pois se não o fizermos, o usuário poderia submeter mais palpites depois do jogo ter terminado, o que iria bagunçar as coisas.
As próximas três linhas geram um novo elemento <button>, define o texto de seu rótulo como "Iniciar novo jogo", e o adiciona ao final do nosso HTML existente.
A linha final define um monitor de evento (event listener) em nosso botão, para que quando seja clicado, uma função chamada reiniciarJogo() seja executada.
*/

function reiniciarJogo() {
  contagemPalpites = 1;
  const reiniciarParas = document.querySelectorAll('.resultadoParas p');
  for(let i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }
  botaoReinicio.parentNode.removeChild(botaoReinicio);
  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();
  ultimoResultado.style.backgroundColor = 'white';
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

/* 
Coloca o valor da variável contagemPalpites novamente igual a 1.
Limpa todos os parágrafos de informativos.
Remove o botão resete do nosso código.
Habilita os elementos do formulários, esvazia e direciona o foco ao campo de texto, pronto para que um novo palpite seja inserido.
Remove a cor de fundo do parágrafo ultimoResultado.
Gera um novo número aleatório para que o jogador não esteja tentando adivinhar o mesmo número novamente!
*/