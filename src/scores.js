import { postUser } from './crud.js';

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');

const name = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

const addScore = () => {
  if (name.value === '' && score.value === '') return;
  postUser();
  inputName.value = '';
  inputScore.value = '';
};

export default addScore;
