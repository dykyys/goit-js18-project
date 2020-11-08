import refs from './refs';
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
// const daysList = document.querySelector('.js-fiveDays__list');

rightArrow.addEventListener('click', scrollToLeft);
leftArrow.addEventListener('click', scrollToRight);

function scrollToLeft() {
  refs.daysList.scroll({
    left: 160,
    behavior: 'smooth',
  });
}

function scrollToRight() {
  refs.daysList.scroll({
    left: -160,
    behavior: 'smooth',
  });
}
