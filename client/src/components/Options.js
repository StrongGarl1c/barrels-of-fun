import { useState } from 'react';
import Difficulty from './Difficulty';

function Options(props) {
  const [display, setDisplay] = useState(true);

  const render = (
    <div className='starting-screen'>
      <h2>Options</h2>
      <button onClick={() => setDisplay(false)}>Difficulty</button>
      <button disabled>Sound</button>
      <button disabled>Graphics</button>
      <button onClick={() => props.changeOptions(false)}>Back</button>
    </div>
  );

  return display ? (
    render
  ) : (
    <Difficulty
      changeDisplay={setDisplay}
      startingBarrels={props.startingBarrels}
      borders={props.borders}
      style={props.style}
      setDifficulty={props.setDifficulty}
    />
  );
}

export default Options;
