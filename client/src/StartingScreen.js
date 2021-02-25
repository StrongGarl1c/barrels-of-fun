import { useState } from 'react';
import Options from './Options';

function StartingScreen(props) {
  const [displayOptions, setDisplayOptions] = useState(false);

  function changeOptions(bool) {
    setDisplayOptions(bool);
  }

  const render = (
    <div className="starting-screen">
      <button onClick={props.shuffle}>Start game</button>
      <br />
      <button onClick={() => changeOptions(true)}>Options</button>
    </div>
  );
  return displayOptions ? (
    <Options
      changeOptions={changeOptions}
      gameDifficulty={props.gameDifficulty}
    />
  ) : (
    render
  );
}

export default StartingScreen;
