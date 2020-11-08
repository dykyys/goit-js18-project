import refs from './refs';
// const daysList = document.querySelector('.js-fiveDays__list');
// const daysListItem = document.querySelectorAll('.days-list__item');

refs.daysList.addEventListener('click', handleBtnClick);

const activeCardFiveDay = event => {
  // const daysListItem = document.querySelectorAll('.days-list__item');
  refs.daysListItem.forEach(e => {
    const day = e.childNodes[1];
    const moreInfoBtn = e.childNodes[9];
    // day.classList.remove('fiveDays__weekDay-active');
    // moreInfoBtn.classList.remove('days-list__more-btn__active');
  });
  const target = event.target;
  const day = event.path[1].firstElementChild;
  // day.classList.add('fiveDays__weekDay-active');
  // target.classList.add('days-list__more-btn__active');
};

function handleBtnClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName == 'BUTTON') {
    activeCardFiveDay(event);
  }
}
