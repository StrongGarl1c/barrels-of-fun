import { useState, useEffect, useCallback } from 'react';
import './style.css';
import Barrel from './Barrel';
import StartingScreen from './StartingScreen';

function Map() {
  const [startingBarrels, setStartingBarrels] = useState(3);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [animation, setAnimation] = useState('');
  const [reset, setReset] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const [gamesStart, setGameStart] = useState(false);
  const [status, setStatus] = useState('Найди веселую бочку!');
  const [style, setStyle] = useState({
    easy: { border: 'solid black 3px' },
    normal: {},
    hard: {},
  });

  const fillArray = useCallback(
    function () {
      return Array(startingBarrels)
        .fill({
          top: Math.floor(Math.random() * 450),
          left: Math.floor(Math.random() * 450),
        })
        .map((item) => {
          return {
            top: Math.floor(Math.random() * 450),
            left: Math.floor(Math.random() * 450),
          };
        });
    },
    [startingBarrels],
  );

  const [position, setPosition] = useState(fillArray());

  function set() {
    setPosition(
      position.map((item) => {
        return {
          top: Math.floor(Math.random() * (450 - item.top)),
          left: Math.floor(Math.random() * (450 - item.left)),
        };
      }),
    );
  }

  const shuffle = () => {
    setPlayAnimation(true);
    setGameStart(true);
    setStatus('Найди веселую бочку!');
    function shuffle3times() {
      let i = 0;
      for (i; i < startingBarrels; i++) {
        setTimeout(set, (3 + i) * 1000);
      }
      setTimeout(() => setGameStatus(true), (startingBarrels + 3) * 1000);
      setTimeout(() => setPlayAnimation(false), 3000);
    }
    shuffle3times();
  };

  function go(e) {
    if (parseInt(e.target.name) === 0) {
      setStatus('Угадал!');
      setGameStatus(false);
      setPosition([
        ...position,
        {
          top: Math.floor(Math.random() * 450),
          left: Math.floor(Math.random() * 450),
        },
      ]);
    } else {
      e.target.style.backgroundColor = 'red';
      e.target.parentElement.firstChild.style.backgroundColor = 'yellow';
      setStatus('Ты проиграл!');
      setGameStatus(false);
    }
  }

  function resetGame() {
    setGameStatus(false);
    setGameStart(false);
    setPosition(fillArray());
    setStatus('Найди веселую бочку!');
    setReset(!reset);
  }

  function gameDifficulty(diff) {
    setStartingBarrels(diff);
  }

  function button() {
    if (status === 'Угадал!') {
      return (
        <button
          onClick={() => {
            shuffle();
            setPlayAnimation(true);
          }}
        >
          Следующий Раунд
        </button>
      );
    } else if (gamesStart) {
      return <button onClick={resetGame}>Новая Игра</button>;
    }
  }

  function borders(obj) {
    setStyle(obj);
  }

  useEffect(() => {
    setPosition(fillArray());
  }, [startingBarrels, fillArray]);

  useEffect(() => {
    playAnimation
      ? setAnimation('blink 0.5s 6 alternate ease-in-out')
      : setAnimation('');
  }, [playAnimation]);

  return (
    <>
      <h2>{status}</h2>
      <div id="map">
        {gamesStart ? (
          position.map((item, index) =>
            index === 0 ? (
              <Barrel
                key={index}
                position={position[index]}
                go={gameStatus ? go : null}
                name={index}
                animation={animation}
              />
            ) : (
              <Barrel
                key={index}
                position={position[index]}
                go={gameStatus ? go : null}
                name={index}
              />
            ),
          )
        ) : (
          <StartingScreen
            shuffle={shuffle}
            gameDifficulty={gameDifficulty}
            borders={borders}
            style={style}
          />
        )}
      </div>
      {button()}
    </>
  );
}

export default Map;
