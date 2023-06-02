const carouselContainer = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;

carouselContainer.style.width = `${cardWidth * cards.length}px`;

function scrollToCurrentIndex() {
  carouselContainer.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
}

function handleNextClick() {
  currentIndex = (currentIndex + 1) % cards.length;
  scrollToCurrentIndex();
}

function handlePrevClick() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  scrollToCurrentIndex();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn-next').addEventListener('click', handleNextClick);
  document.querySelector('.btn-prev').addEventListener('click', handlePrevClick);
});