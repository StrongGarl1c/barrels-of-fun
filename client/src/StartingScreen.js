import { useState } from 'react';
import LeaderBoard from './LeaderBoard';
import Options from './Options';

function StartingScreen(props) {
  const [displayOptions, setDisplayOptions] = useState(false);

  function changeOptions(bool) {
    setDisplayOptions(bool);
  }

  function render() {
    if (displayOptions) {
      return (
        <Options
          changeOptions={changeOptions}
          gameDifficulty={props.gameDifficulty}
          borders={props.borders}
          style={props.style}
          setDifficulty={props.setDifficulty}
        />
      );
    } else if (props.showTop20) {
      return <LeaderBoard top={props.top} displayTop20={props.displayTop20} />;
    } else {
      return (
        <div className='starting-screen'>
          <button
            onClick={() => {
              let playerName;
              if (!props.playerName) {
                const p = prompt('Введите ник');
                p ? (playerName = p) : (playerName = 'Гость');
                props.setName(playerName);
              }
              props.setVisibility(true);
              props.shuffle();
            }}
          >
            Начать игру
          </button>
          <button onClick={() => props.displayTop20(true)}>Топ 20</button>
          <button onClick={() => changeOptions(true)}>Опции</button>
        </div>
      );
    }
  }
  return render();
}

export default StartingScreen;
