import { useState, useEffect } from 'react';

function ScoreBoard() {
  const [top15, setTop15] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await fetch('http://localhost:27017/top15', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await result.json();
    setTop15(data);
  }

  function numbers(clicks) {
    switch (clicks) {
      case 1:
        return 'клик';
        break;
      case 2:
      case 3:
      case 4:
        return 'клика';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        return 'кликов';
        break;
      default:
        return 'много кликов :(';
    }
  }

  return (
    <div id="innerGrid">
      <div id="header">
        <h1>Зал Славы</h1>
        <br />
      </div>
      <div id="scoreList">
        {top15.map((item) => (
          <p key={item.name}>
            {item.name} {item.score} {numbers(item.score)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
