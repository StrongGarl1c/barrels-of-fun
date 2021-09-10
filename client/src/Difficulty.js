function Difficulty(props) {
  const border = 'solid black 3px';
  return (
    <div className='starting-screen'>
      <h2>Сложность</h2>
      <div className='difficulty'>
        <button
          style={props.style.easy}
          onClick={() => {
            props.gameDifficulty(3);
            props.borders({ easy: { border: border } });
            props.setDifficulty(1);
          }}
        >
          Легкая
        </button>
        <button
          style={props.style.normal}
          onClick={() => {
            props.gameDifficulty(6);
            props.borders({ normal: { border: border } });
            props.setDifficulty(2);
          }}
        >
          Нормальная
        </button>
        <button
          style={props.style.hard}
          onClick={() => {
            props.gameDifficulty(10);
            props.borders({ hard: { border: border } });
            props.setDifficulty(3);
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
