export const createElement = (score) => {
  return `<li>
            <span>${score.user}:</span>
            <span>${score.score}</span>
          </li>
       `;
};
