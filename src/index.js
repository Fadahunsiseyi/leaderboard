import './style.css';
import addScore from './scores';

const name = document.querySelector('.input-name');
const submitBtn = document.querySelector('.submit-btn');

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

