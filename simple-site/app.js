// Obtém todos os botões com a classe "botoes-carrossel"
const botoes = document.querySelectorAll('.botoes-carrossel');
const imagens = document.querySelectorAll('.carrossel');

// Adiciona um ouvinte de eventos para cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', exibirImagem);
});

function exibirImagem(event) {
  const target = event.target;
  const imagemId = target.getAttribute('data-target');
  const imagem = document.getElementById(imagemId);

  // Esconde todas as imagens
  
  imagens.forEach(img => {
    imagem.style.display = 'none';
  });

  // Exibe a imagem correspondente ao botão clicado
  imagem.style.display = 'block';
};
