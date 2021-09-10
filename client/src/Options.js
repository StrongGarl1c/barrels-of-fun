import { useState } from 'react';
import Difficulty from './Difficulty';

function Options(props) {
  const [display, setDisplay] = useState(true);

  function changeDisplay() {
    setDisplay(true);
  }

  const render = (
    <div className='starting-screen'>
      <h2>Опции</h2>
      <button onClick={() => setDisplay(false)}>Сложность</button>
      <button disabled>Звук</button>
      <button disabled>Изображение</button>
      <button onClick={() => props.changeOptions(false)}>Назад</button>
    </div>
  );

  return display ? (
    render
  ) : (
    <Difficulty
      changeDisplay={changeDisplay}
      gameDifficulty={props.gameDifficulty}
      borders={props.borders}
      style={props.style}
      setDifficulty={props.setDifficulty}
    />
  );
}

export default Options;
