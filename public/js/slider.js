const cards = document.getElementsByClassName('card');

for (let card of cards) {
  card.addEventListener('click', () => {
    if (!card.classList.contains('active')) {
      for (let c of cards) {
        c.classList.remove('active');
        card.classList.add('active');
      }
    }
  });
}
