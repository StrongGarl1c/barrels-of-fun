const url =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';
export async function sendResultToTheServer(player) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    if (res.status === 201) {
      return await res.json();
    }
    return null;
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
