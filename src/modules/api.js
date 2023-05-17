const gameId = 'W957Sy4qvo8H73dJVrZc';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

export const getScores = async () => {
  const data = await fetch(url);

  const { result } = await data.json();

  return result;
};

export const addScore = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
