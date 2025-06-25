adicionar.addEventListener('click', function() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  
  if (isNaN(num1) || isNaN(num2)) {
    alert('Por favor, insira números válidos.');
    return;
  }

  let resultado = num1 + num2;
  alert('Resultado da adição:' + resultado);
} );

subtrair.addEventListener('click', function() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Por favor, insira números válidos.');
    return;
  }

  let resultado = num1 - num2;
  alert('Resultado da subtração:'+ resultado);
}); 
multiplicar.addEventListener('click', function() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Por favor, insira números válidos.');
    return;
  }

  let resultado = num1 * num2;
  alert('Resultado da multiplicação:' + resultado);
});
dividir.addEventListener('click', function() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Por favor, insira números válidos.');
    return;
  }

  if (num2 === 0) {
    alert('Divisão por zero não é permitida.');
    return;
  }

  let resultado = num1 / num2;
  alert('Resultado da divisão:' + resultado);
});