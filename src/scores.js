import { getUser, postUser } from "./crud";
const inputName = document.querySelector('.input-name')
const inputScore = document.querySelector('.input-score')

const ul = document.querySelector('.names-container');
const name = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

export const addScore = () => {
  if (name.value === '' && score.value === '') return;
  postUser()
  inputName.value = '';
  inputScore.value = '';
//   const li = `<li>${name.value}:${score.value}</li>`;
//   ul.insertAdjacentHTML('beforeend', li);
//   name.value = '';
//   score.value = '';
};

// export const createScoreName = () => {
//     const users =  getUser();
//     console.log(users, 'in the score file')
//     // ul.innerText = ''
//     // users.sort((a,b) => a - b)
//     users.result.forEach((user) => {
//     const li = `<li>${user.user}:${user.score}</li>`;
//   ul.insertAdjacentHTML('beforeend', li);
//     })
// }
