function filterGame(type) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (type === 'all' || card.classList.contains(type)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
