import './style.css';
import { addScore} from './scores';
import { getUser } from './crud';

getUser();

const name = document.querySelector('.input-name');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (isNaN(name.value)) {
    addScore();
  } else {
    alert('The name field should contain letters');
  }
});

refreshBtn.addEventListener('click', getUser);
