import refs from '../refs';
import backgroundApi from '../services/backgroundApi';

backgroundApi.makeQuery().then(setBackgroundImage); 
refs.locationForm.addEventListener('submit', changeBackgroundImage);

function changeBackgroundImage(event) {
  if (typeof event == 'object') {
    event.preventDefault();
    const form = event.currentTarget;
    backgroundApi.query = form.elements.query.value;
  } else {
    backgroundApi.query = event;
  }
  backgroundApi.makeQuery().then(setBackgroundImage);
}

function setBackgroundImage(backgroundImages) {
  if (backgroundImages.length === 0) {
    backgroundApi.query = 'suny';
    backgroundApi.makeQuery().then(setBackgroundImage);
  } else {
    refs.wrapper.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${backgroundImages[0].largeImageURL}') center fixed; background-size: cover;`;
  }
}

export { setBackgroundImage, changeBackgroundImage };
