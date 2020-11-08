const rightArrow = document.querySelector('#moreInfo-right-btn');
const leftArrow = document.querySelector('#moreInfo-left-btn');
const moreInfoBlock = document.querySelector('.js-moreInfo__list');

rightArrow.addEventListener('click', scrollToLeft);
leftArrow.addEventListener('click', scrollToRight);

function scrollToLeft() {
  rightArrow.classList.add('isOpacity');
  leftArrow.classList.remove('isOpacity');
  moreInfoBlock.scroll({
    left: 550,
    behavior: 'smooth',
  });
}

function scrollToRight() {
  rightArrow.classList.remove('isOpacity');
  leftArrow.classList.add('isOpacity');
  moreInfoBlock.scroll({
    left: -550,
    behavior: 'smooth',
  });
}
