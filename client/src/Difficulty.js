function Difficulty(props) {
  const border = 'solid black 3px';
  return (
    <div className="starting-screen">
      <h2>Сложность</h2>
      <div className="difficulty">
        <button
          style={props.style.easy}
          onClick={(e) => {
            props.gameDifficulty(3);
            props.borders({ easy: { border: border } });
          }}
        >
          Легкая
        </button>
        <button
          style={props.style.normal}
          onClick={(e) => {
            props.gameDifficulty(6);
            props.borders({ normal: { border: border } });
          }}
        >
          Нормальная
        </button>
        <button
          style={props.style.hard}
          onClick={(e) => {
            props.gameDifficulty(10);
            props.borders({ hard: { border: border } });
          }}
        >
          Сложная
        </button>
        <button onClick={() => props.changeDisplay()}>Назад</button>
      </div>
    </div>
  );
}

export default Difficulty;
