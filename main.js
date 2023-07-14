const formulario = document.getElementById('meuFormulario');
const mensagemDiv = document.getElementById('mensagem');
formulario.addEventListener('submit', function(event) {
  const campoA = parseInt(document.getElementById('campoA').value);
  const campoB = parseInt(document.getElementById('campoB').value);
  
  if (campoB <= campoA) {
    mensagemDiv.textContent = 'O número B deve ser maior que o número A!';
    mensagemDiv.style.color = 'red';
  } else {
    mensagemDiv.textContent = 'Formulário válido!';
    mensagemDiv.style.color = 'green';
  }
});
