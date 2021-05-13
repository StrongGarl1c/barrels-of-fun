import { useState } from 'react';
import Options from './Options';

function StartingScreen(props) {
  const [displayOptions, setDisplayOptions] = useState(false);

  function changeOptions(bool) {
    setDisplayOptions(bool);
  }

  const render = (
    <div className="starting-screen">
      <button onClick={props.shuffle}>Начать игру</button>
      <button onClick={() => changeOptions(true)}>Опции</button>
    </div>
  );
  return displayOptions ? (
    <Options
      changeOptions={changeOptions}
      gameDifficulty={props.gameDifficulty}
      borders={props.borders}
      style={props.style}
    />
  ) : (
    render
  );
}

export default StartingScreen;
