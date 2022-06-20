function Difficulty(props) {
  const border = 'solid black 3px';
  return (
    <div className='starting-screen'>
      <h2>Difficulty</h2>
      <div className='difficulty'>
        <button
          style={props.style.easy}
          onClick={() => {
            props.startingBarrels(3);
            props.borders({ easy: { border: border } });
            props.setDifficulty(1);
          }}
        >
          Easy
        </button>
        <button
          style={props.style.normal}
          onClick={() => {
            props.startingBarrels(6);
            props.borders({ normal: { border: border } });
            props.setDifficulty(2);
          }}
        >
          Normal
        </button>
        <button
          style={props.style.hard}
          onClick={() => {
            props.startingBarrels(10);
            props.borders({ hard: { border: border } });
            props.setDifficulty(3);
          }}
        >
          Hard
        </button>
        <button onClick={() => props.changeDisplay(true)}>Back</button>
      </div>
    </div>
  );
}

export default Difficulty;
