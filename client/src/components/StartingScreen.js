import { useState } from 'react';
import LeaderBoard from './LeaderBoard';
import Options from './Options';

function StartingScreen(props) {
  const [displayOptions, setDisplayOptions] = useState(false);

  function render() {
    if (displayOptions) {
      return (
        <Options
          changeOptions={setDisplayOptions}
          startingBarrels={props.startingBarrels}
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
                const p = prompt('Enter nickname');
                p ? (playerName = p) : (playerName = 'Guest');
                props.setName((prevState) => {
                  return { ...prevState, name: playerName };
                });
              }
              props.setVisibility(true);
              props.shuffle();
            }}
          >
            Start game
          </button>
          <button onClick={() => props.displayTop20(true)}>Top 20</button>
          <button onClick={() => setDisplayOptions(true)}>Options</button>
        </div>
      );
    }
  }
  return render();
}

export default StartingScreen;
