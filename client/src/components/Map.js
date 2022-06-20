import { useState, useEffect, useCallback } from 'react';
import './style.css';
import Barrel from './Barrel';
import StartingScreen from './StartingScreen';
import LeaderBoard from './LeaderBoard';
import barrelsWithRandomPosition from '../functions/barrelsWithRandomPosition';
import newBarrelAtRandomPosition from '../functions/newBarrelAtRandomPosition';
import { getDataFromTheServer, sendResultToTheServer } from '../api/api';
import Button from './Button';

function Map() {
  const [startingBarrels, setStartingBarrels] = useState(3);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [animation, setAnimation] = useState('');
  const [reset, setReset] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const [gamesStart, setGameStart] = useState(false);
  const [status, setStatus] = useState('Find the funny barrel!');
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
    setStatus('Find the funny barrel!');
    for (let i = 0; i < startingBarrels; i++) {
      setTimeout(setNewPosition, (3 + i) * 1000);
    }
    setTimeout(() => setGameStatus(true), (startingBarrels + 3) * 1000);
    setTimeout(() => setPlayAnimation(false), 3000);
  }

  function checkGuess(e) {
    // if guess is correct
    if (parseInt(e.target.name) === 0) {
      setStatus('Correct!');
      setGameStatus(false);
      // add a new barrel with no collission
      setPosition((prevState) => [
        ...prevState,
        newBarrelAtRandomPosition(prevState),
      ]);
      setPlayer((prevState) => {
        return {
          ...prevState,
          score: (player.score += position.length * difficulty),
        };
      });
      shuffle();
    } else {
      // if guess is wrong
      e.target.style.backgroundColor = 'red';
      e.target.parentElement.firstChild.style.backgroundColor = 'yellow';
      setStatus('You lose!');
      setGameStatus(false);
      setGameOver(true);
      sendResultToTheServer(player).then((res) => (res ? setTop20(res) : null));
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Show top 20?')) {
          setShowTop20(true);
        }
      }, 1000);
    }
  }

  function resetGame() {
    setGameStatus(false);
    setGameStart(false);
    setPosition(barrelsWithRandomPosition(startingBarrels));
    setStatus('Find the funny barrel!');
    setReset(!reset);
    setVisibility(false);
    setPlayer((prevState) => {
      return { ...prevState, score: 0 };
    });
    setGameOver(false);
    setShowTop20(false);
  }

  function setVisibility(bool) {
    return bool
      ? setHidden({ visibility: '' })
      : setHidden({ visibility: 'hidden' });
  }

  const getDataFromTheServerAndSetTop20 = useCallback(async () => {
    const data = await getDataFromTheServer();
    setTop20(data);
  }, []);

  useEffect(() => {
    setPosition(barrelsWithRandomPosition(startingBarrels));
  }, [startingBarrels]);

  useEffect(() => {
    playAnimation
      ? setAnimation('blink 0.5s 6 alternate ease-in-out')
      : setAnimation('');
  }, [playAnimation]);

  useEffect(() => {
    getDataFromTheServerAndSetTop20();
  }, [getDataFromTheServerAndSetTop20]);

  function render() {
    if (showTop20) {
      return <LeaderBoard top={top20} displayTop20={setShowTop20} />;
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
          startingBarrels={setStartingBarrels}
          borders={setStyle}
          style={style}
          setName={setPlayer}
          setVisibility={setVisibility}
          playerName={player.name}
          setDifficulty={setDifficulty}
          top={top20}
          showTop20={showTop20}
          displayTop20={setShowTop20}
        />
      );
    }
  }

  return (
    <>
      <h2>{status}</h2>
      <h2 style={hidden}>{`${player.name} Score: ${player.score}`}</h2>
      <div id='map'>{render()}</div>
      {(gameStatus || gameOver) && (
        <Button
          gameStatus={gameStatus}
          gameOver={gameOver}
          resetGame={resetGame}
        />
      )}
    </>
  );
}

export default Map;
