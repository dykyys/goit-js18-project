const locationForm = document.querySelector('.js-location__form');
const wrapper = document.querySelector('.js-wrapper');
const locationFormBtn = document.querySelector(
  '.js-location__form-btn',
);
const locationFormInput = document.querySelector('.js-location__form-input');
const sliderList = document.querySelector('.js-slider__list');
const btnPrev = document.querySelector('.js-slider__Prev-btn');
const btnNext = document.querySelector('.js-slider__Next-btn');

const today = document.querySelector('.js-today');
const todayContainer = document.querySelector('.js-today__container');

const btnOneDay = document.querySelectorAll('.js-today__btn-oneDay');
const btnFiveDays = document.querySelectorAll('.js-today__btn-fiveDay');

const part2City = document.querySelector('.js-fiveDays__tab-desct-city');
const fiveDaysContaineerCityName = document.querySelector(
  '.js-fiveDays__mobile-city',
);

const daysList = document.querySelector('.js-fiveDays__list');

const btnShowChart = document.querySelector('.js-showChart__btn');
const btnHideChart = document.querySelector('.js-hideChart__btn');

const headerOfShowChart = document.querySelector('.js-chart__header-show');
const headerOfHideChart = document.querySelector('.js-chart__header-hide');

const boxOfShowChart = document.querySelector('.js-showChart');
const chartBox = document.querySelector('.js-hideChart');


const part6 = document.querySelector('.moreInfo');
const dateSunriseTime = document.querySelector('.date__sunrise--time');
const dateSunsetTime = document.querySelector('.date__sunset--time');
const daysFiveListblock = document.querySelector('.js-fiveDays__list');
const moreInfoBlock = document.querySelector('.js-moreInfo__list');

const fiveDaysContainer = document.querySelector('.js-fiveDays');

const moreInfoBtn = document.querySelectorAll('moreInfo_scroll_arrow');
const daysListItem = document.querySelectorAll('.js-fiveDays__item');

export default {
  locationForm,
  wrapper,
  locationFormBtn,
  locationFormInput,
  sliderList,
  btnPrev,
  btnNext,
  today,
  todayContainer,
  btnShowChart,
  btnHideChart,
  headerOfShowChart,
  headerOfHideChart,
  boxOfShowChart,
  chartBox,
  btnFiveDays,
  btnOneDay,
  part6,
  dateSunriseTime,
  dateSunsetTime,
  daysFiveListblock,
  moreInfoBlock,
  part2City,
  fiveDaysContaineerCityName,
  fiveDaysContainer,
  moreInfoBtn,
  daysList,
  daysListItem
};
