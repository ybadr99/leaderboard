// make that module just for requirement use module
export default () => {
  const form = document.querySelector('#form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const score = form.elements.score.value;
    document.querySelector('.board').innerHTML += `      <li>
    <span>${name}:</span>
    <span>${score}</span>
      </li>`;

    form.reset();
  });
};
