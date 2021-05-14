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
            props.setDif(1);
          }}
        >
          Легкая
        </button>
        <button
          style={props.style.normal}
          onClick={(e) => {
            props.gameDifficulty(6);
            props.borders({ normal: { border: border } });
            props.setDif(2);
          }}
        >
          Нормальная
        </button>
        <button
          style={props.style.hard}
          onClick={(e) => {
            props.gameDifficulty(10);
            props.borders({ hard: { border: border } });
            props.setDif(3);
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
