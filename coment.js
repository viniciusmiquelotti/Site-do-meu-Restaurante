// Todos os elementos de estrela
const stars = document.querySelectorAll('.card .rating .star');

// Estrela
stars.forEach((star) => {
  star.addEventListener('click', setRating);
  star.addEventListener('mouseover', fillStars);
  star.addEventListener('mouseout', resetStars);
});

// A avaliação quando uma estrela é clicada
function setRating() {
  const rating = this.getAttribute('data-value');
  console.log(`Avaliação: ${rating}`);
  // Aqui você pode adicionar a lógica para salvar a avaliação em algum lugar, como em um banco de dados
}

// Aqui coloca as estrelas até a estrela atual quando o mouse está sobre ela
function fillStars() {
  const rating = this.getAttribute('data-value');
  stars.forEach((star) => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('active');
    }
  });
}

// Aqui coloca as estrelas para o quando o mouse sai da área das estrelas
function resetStars() {
  stars.forEach((star) => {
    star.classList.remove('active');
  });
}
