import { useState, useEffect } from 'react';

function LeaderBoard(props) {
  const [top20, setTop20] = useState(props.top);

  useEffect(() => {
    setTop20(props.top);
  }, [props.top]);

  return (
    <>
      <h2>Top 20</h2>
      <ul id="leader-board">
        {top20.map((user) => {
          return (
            <li key={user._id}>
              <b>{user.name}</b> {user.score}
            </li>
          );
        })}
      </ul>
      <button onClick={() => props.displayTop20(false)}>Back</button>
    </>
  );
}

export default LeaderBoard;
