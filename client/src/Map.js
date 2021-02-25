import { useState, useEffect } from 'react';
import './style.css';
import Barrel from './Barrel';
import StartingScreen from './StartingScreen';

function Map() {
  const [startingBarrels, setStartingBarrels] = useState(3);
  const [position, setPosition] = useState(fillArray());
  const [playAnimation, setPlayAnimation] = useState({
    animationPlayState: 'running',
  });
  const [reset, setReset] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const [gamesStart, setGameStart] = useState(false);
  const [status, setStatus] = useState('Найди веселую бочку!');

  useEffect(() => {
    setPosition(fillArray());
  }, [startingBarrels]);

  function fillArray() {
    return Array(startingBarrels)
      .fill({
        top: Math.floor(Math.random() * 450),
        left: Math.floor(Math.random() * 450),
      })
      .map((item) => {
        return {
          top: Math.floor(Math.random() * (450 - item.top)),
          left: Math.floor(Math.random() * (450 - item.left)),
        };
      });
  }

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
    setGameStart(true);
    setStatus('Найди веселую бочку!');
    function shuffle3times() {
      set();
    }

    setPlayAnimation({
      animationPlayState: 'running',
    });
    setTimeout(
      () =>
        setPlayAnimation({
          animationPlayState: 'paused',
        }),
      3000,
    );
    setTimeout(shuffle3times, 3100);
    setTimeout(shuffle3times, 4100);
    setTimeout(shuffle3times, 5100);
    setTimeout(() => setGameStatus(true), 5000);
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

  return (
    <>
      {/* <h1>Бочки Веселухи!</h1> */}
      <h2>
        {status}
        {status === 'Угадал!' ? (
          <button onClick={shuffle}>Next round</button>
        ) : (
          <>
            <button onClick={resetGame}>New game</button>
            <button onClick={() => gameDifficulty(3)}>3</button>
            <button onClick={() => gameDifficulty(6)}>6</button>
            <button onClick={() => gameDifficulty(10)}>10</button>
          </>
        )}
      </h2>
      <div id="map">
        {gamesStart ? (
          position.map((item, index) => (
            <Barrel
              key={index}
              position={position[index]}
              go={gameStatus ? go : null}
              name={index}
              animation={playAnimation}
            />
          ))
        ) : (
          <StartingScreen shuffle={shuffle} gameDifficulty={gameDifficulty} />
        )}
      </div>
    </>
  );
}

export default Map;
