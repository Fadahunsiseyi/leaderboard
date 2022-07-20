import { add } from 'lodash';

const ul = document.querySelector('.names-container');
const name = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

const addScore = () => {
  if (name.value === '' && score.value === '') return;
  const li = `<li>${name.value}:${score.value}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
  name.value = '';
  score.value = '';
};
export default addScore;
