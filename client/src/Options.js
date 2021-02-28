import { useState } from 'react';
import Difficulty from './Difficulty';

function Options(props) {
  const [display, setDisplay] = useState(true);

  function changeDisplay() {
    setDisplay(true);
  }

  const render = (
    <div className="starting-screen">
      <h2>Опции</h2>
      <button onClick={() => setDisplay(false)}>Сложность</button>
      <button>Звук</button>
      <button>Изображение</button>
      <button onClick={() => props.changeOptions(false)}>Назад</button>
    </div>
  );

  return display ? (
    render
  ) : (
    <Difficulty
      changeDisplay={changeDisplay}
      gameDifficulty={props.gameDifficulty}
    />
  );
}

export default Options;
