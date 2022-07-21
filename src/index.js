import './style.css';
import {addScore, createScoreName } from './scores';
import { getUser } from './crud';
// import { api } from './crud';

// api()

getUser()

const name = document.querySelector('.input-name');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn')
addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (isNaN(name.value)) {
    addScore();
  } else {
    alert('The name field should contain letters');
  }
  console.log('i have been clicked');
});

refreshBtn.addEventListener('click', getUser)

