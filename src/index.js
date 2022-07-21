import './style.css';
import addScore from './scores.js';
import { getUser } from './crud.js';

getUser();

const name = document.querySelector('.input-name');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(name.value)) {
    addScore();
  } else {
    // eslint-disable-next-line no-alert
    alert('The name field should contain letters');
  }
});

refreshBtn.addEventListener('click', getUser);
