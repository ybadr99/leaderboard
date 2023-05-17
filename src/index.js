import './style.css';
import { getScores, addScore } from './modules/api.js';
import createElement from './modules/helpers.js';

const renderScores = async () => {
  const scores = await getScores();
  if (scores.length > 0) {
    document.querySelector('.board').innerHTML = '';
    scores.forEach((score) => {
      document.querySelector('.board').innerHTML += createElement(score);
    });
  }
};

renderScores();

document.querySelector('.refresh').addEventListener('click', renderScores);

const form = document.querySelector('form');

form.addEventListener('submit', () => {
  const name = form.elements.name.value;
  const score = form.elements.score.value;
  addScore({
    user: name,
    score,
  });

  form.reset();
});
