import { useState, useEffect, useCallback } from 'react';
import './style.css';
import Barrel from './Barrel';
import StartingScreen from './StartingScreen';
import LeaderBoard from './LeaderBoard';
import barrelsWithRandomPosition from './functions/barrelsWithRandomPosition';

function Map() {
  const [startingBarrels, setStartingBarrels] = useState(3);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [animation, setAnimation] = useState('');
  const [reset, setReset] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const [gamesStart, setGameStart] = useState(false);
  const [status, setStatus] = useState('Найди веселую бочку!');
  const [gameOver, setGameOver] = useState(false);
  const [style, setStyle] = useState({
    easy: { border: 'solid black 3px' },
    normal: {},
    hard: {},
  });
  const [player, setPlayer] = useState({
    name: '',
    score: 0,
  });
  const [hidden, setHidden] = useState({
    visibility: 'hidden',
  });
  const [difficulty, setDifficulty] = useState(1);
  const [top20, setTop20] = useState([]);
  const [showTop20, setShowTop20] = useState(false);
  const [position, setPosition] = useState(
    barrelsWithRandomPosition(startingBarrels),
  );

  function setNewPosition() {
    setPosition((prevState) => barrelsWithRandomPosition(prevState.length));
  }

  function shuffle() {
    setPlayAnimation(true);
    setGameStart(true);
    setStatus('Найди веселую бочку!');
    for (let i = 0; i < startingBarrels; i++) {
      setTimeout(setNewPosition, (3 + i) * 1000);
    }
    setTimeout(() => setGameStatus(true), (startingBarrels + 3) * 1000);
    setTimeout(() => setPlayAnimation(false), 3000);
  }

  function checkGuess(e) {
    // if guess is correct
    if (parseInt(e.target.name) === 0) {
      setStatus('Угадал!');
      setGameStatus(false);
      // to do add a new barrel with no collission
      setPosition((prevState) => [
        ...prevState,
        {
          top: Math.floor(Math.random() * 450),
          left: Math.floor(Math.random() * 450),
        },
      ]);
      setPlayer((prevState) => {
        return {
          ...prevState,
          score: (player.score += (position.length - 1) * difficulty),
        };
      });
      shuffle();
      // if guess is wrong
    } else {
      e.target.style.backgroundColor = 'red';
      e.target.parentElement.firstChild.style.backgroundColor = 'yellow';
      setStatus('Ты проиграл!');
      setGameStatus(false);
      setGameOver(true);
      (async function () {
        try {
          const response = await fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
          });
          const data = await response.json();
          setTop20(data);
        } catch (error) {
          console.error(error);
        }
      })();
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Показать топ 20?')) {
          setShowTop20(true);
        }
      }, 2000);
    }
  }

  function resetGame() {
    setGameStatus(false);
    setGameStart(false);
    setPosition(barrelsWithRandomPosition(startingBarrels));
    setStatus('Найди веселую бочку!');
    setReset(!reset);
    setVisibility(false);
    setPlayer((prevState) => {
      return { ...prevState, score: 0 };
    });
    setGameOver(false);
    setShowTop20(false);
  }

  function gameDifficulty(diff) {
    setStartingBarrels(diff);
  }

  function button() {
    if (gameStatus || gameOver) {
      return <button onClick={resetGame}>Новая Игра</button>;
    }
  }

  function borders(obj) {
    setStyle(obj);
  }

  function setName(name) {
    setPlayer((prevState) => {
      return { ...prevState, name: name };
    });
  }

  function setVisibility(bool) {
    return bool
      ? setHidden({ visibility: '' })
      : setHidden({ visibility: 'hidden' });
  }

  const getData = useCallback(async () => {
    try {
      const res = await fetch('/api');
      const data = await res.json();
      setTop20(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  function displayTop20(bool) {
    setShowTop20(bool);
  }

  useEffect(() => {
    setPosition(barrelsWithRandomPosition(startingBarrels));
  }, [startingBarrels]);

  useEffect(() => {
    playAnimation
      ? setAnimation('blink 0.5s 6 alternate ease-in-out')
      : setAnimation('');
  }, [playAnimation]);

  useEffect(() => {
    getData();
  }, [getData]);

  function render() {
    if (showTop20) {
      return <LeaderBoard top={top20} displayTop20={displayTop20} />;
    } else if (gamesStart) {
      return position.map((item, index) =>
        index === 0 ? (
          <Barrel
            key={index}
            position={position[index]}
            go={gameStatus ? checkGuess : null}
            name={index}
            animation={animation}
          />
        ) : (
          <Barrel
            key={index}
            position={position[index]}
            go={gameStatus ? checkGuess : null}
            name={index}
          />
        ),
      );
    } else {
      return (
        <StartingScreen
          shuffle={shuffle}
          gameDifficulty={gameDifficulty}
          borders={borders}
          style={style}
          setName={setName}
          setVisibility={setVisibility}
          playerName={player.name}
          setDifficulty={setDifficulty}
          top={top20}
          showTop20={showTop20}
          displayTop20={displayTop20}
        />
      );
    }
  }

  return (
    <>
      <h2>{status}</h2>
      <h2 style={hidden}>{`${player.name} Очки: ${player.score}`}</h2>
      <div id='map'>{render()}</div>
      {button()}
    </>
  );
}

export default Map;
