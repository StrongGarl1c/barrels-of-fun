import { useState } from 'react';

function Options(props) {
  const [display, setDisplay] = useState(true);
  const difficulity = (
    <div className="starting-screen">
      <h2>Сложность</h2>
      <button onClick={() => props.gameDifficulty(3)}>Easy</button>
      <button onClick={() => props.gameDifficulty(6)}>Normal</button>
      <button onClick={() => props.gameDifficulty(10)}>Hard</button>
      <button onClick={() => setDisplay(true)}>Назад</button>
    </div>
  );
  const render = (
    <div className="starting-screen">
      <h2>Опции</h2>
      <button onClick={() => setDisplay(false)}>Игра</button>
      <button>Звук</button>
      <button onClick={() => props.changeOptions(false)}>Назад</button>
    </div>
  );
  return display ? render : difficulity;
}

export default Options;
