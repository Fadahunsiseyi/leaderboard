const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const ul = document.querySelector('.names-container');

export const postUser = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NGhCX4R3qCILaTqPLKM0/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: inputName.value,
        score: inputScore.value,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const getUser = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NGhCX4R3qCILaTqPLKM0/scores/'
  );
  try {
    const users = await res.json();
    ul.innerText = '';
    users.result.sort((a, b) => a.score - b.score);
    users.result.forEach((user) => {
      const li = `<li>${user.user}:${user.score}</li>`;
      ul.insertAdjacentHTML('beforeend', li);
    });
  } catch (error) {
    console.log(error);
  }
};
