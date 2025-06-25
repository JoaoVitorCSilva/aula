btn_enviar.addEventListener('click', function(event){
  let nome = document.getElementById('nome').value;
  let idade = document.getElementById('idade').value;

  console.log('Nome:', nome);
  console.log('Idade:', idade);

  if(idade>=  18){
    console.log('Você é maior de idade.');
  }
  else{
    console.log('Você é menor de idade.');
  }

});