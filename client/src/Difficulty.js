function Difficulty(props) {
  return (
    <div className="starting-screen">
      <h2>Сложность</h2>
      <button onClick={() => props.gameDifficulty(3)}>Легкая</button>
      <button onClick={() => props.gameDifficulty(6)}>Нормальная</button>
      <button onClick={() => props.gameDifficulty(10)}>Сложная</button>
      <button onClick={() => props.changeDisplay()}>Назад</button>
    </div>
  );
}

export default Difficulty;
