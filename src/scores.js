import { postUser } from './crud';
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');

const ul = document.querySelector('.names-container');
const name = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

export const addScore = () => {
  if (name.value === '' && score.value === '') return;
  postUser();
  inputName.value = '';
  inputScore.value = '';
};
