import { useState, useEffect } from 'react';
import './style.css';
import Barrel from './Barrel';
import StartingScreen from './StartingScreen';
import music from './01_jeremy_soule_reign_of_the_septims_myzuka.fm.mp3';

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
          top: Math.floor(Math.random() * 450),
          left: Math.floor(Math.random() * 450),
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
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }),
      3000,
    );
    setTimeout(shuffle3times, 3000);
    setTimeout(shuffle3times, 4000);
    setTimeout(shuffle3times, 5000);
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
      e.target.parentElement.firstChild.style.animationPlayState = 'running';
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
          <button onClick={shuffle}>Следующий Раунд</button>
        ) : (
          <>
            <button onClick={resetGame}>Новая Игра</button>
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
      <audio controls autoPlay>
        <source src={music} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default Map;
