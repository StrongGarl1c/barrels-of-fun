const url = 'http://localhost:5000/api';
// const url = '/api';

export async function sendResultToTheServer(player) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getDataFromTheServer() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
