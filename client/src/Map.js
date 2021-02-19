import { useState, useEffect } from 'react';
import map from './885059-elwynn_forest.jpg';
import './style.css';

function Map() {
  const [playerName, setPlayerName] = useState('Player 1');
  const [clicks, setClicks] = useState(0);
  const [distanceHint, setDistanceHint] = useState(
    'Кликай по карте, а тут будет подсказка!',
  );
  const [target, setTarget] = useState({
    x: getRandomNumber(900),
    y: getRandomNumber(600),
  });
  const [gameIsFinished, setGameIsFinished] = useState(false);

  useEffect(() => {
    let name = prompt('Введите ник');
    if (name) {
      setPlayerName(name);
    }
  }, []);

  function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
  }

  // расчет расстояния от клика (event) до цели (target)
  function getDistance(event, target) {
    console.log('event', event.clientX, event.clientY);
    console.log('target', target.x, target.y);
    const diffX = event.clientX - target.x;
    const diffY = event.clientY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
  }

  // строка подсказки расстояния
  function getDistanceHint(distance) {
    if (distance < 20) {
      return 'Логово Рагнароса';
    } else if (distance < 40) {
      return 'Пригорает';
    } else if (distance < 80) {
      return 'Тепло';
    } else if (distance < 160) {
      return 'Прохладно';
    } else if (distance < 320) {
      return 'Очень холодно';
    } else {
      return 'Холодно как в нордсколе';
    }
  }

  function clickHandler(event) {
    setClicks(clicks + 1);
    const distance = getDistance(event, target);
    setDistanceHint(getDistanceHint(distance));
    if (distance < 25) {
      setGameIsFinished(true);
      alert(
        'Дробитель найден! Сделано кликов: ' +
          clicks +
          '\nНу ты индеец, БОМ, БОМ.',
      );

      // eslint-disable-next-line no-restricted-globals
      if (confirm('Начать сначала?')) {
        setClicks(0);
        setDistanceHint('Кликай по карте, а тут будет подсказка!');
        setTarget({
          x: getRandomNumber(900),
          y: getRandomNumber(600),
        });
        setGameIsFinished(false);
      }
    }
  }
  return (
    <div>
      <h1>{playerName}, Найди Дробителя!</h1>
      <p>{distanceHint}</p>
      <img
        onClick={gameIsFinished ? null : clickHandler}
        src={map}
        style={{ height: '600px' }}
        alt="elwyn forest"
      ></img>
    </div>
  );
}

export default Map;
