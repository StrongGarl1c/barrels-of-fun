import { useState, useEffect } from 'react';
import './style.css';
import Barrel from './Barrel';

function Map() {
  const [position, setPosition] = useState([
    {
      top: Math.floor(Math.random() * 450),
      left: Math.floor(Math.random() * 450),
    },
    {
      top: Math.floor(Math.random() * 450),
      left: Math.floor(Math.random() * 450),
    },
    {
      top: Math.floor(Math.random() * 450),
      left: Math.floor(Math.random() * 450),
    },
  ]);
  const shuffle = () => {
    setPosition(
      position.map((item) => {
        return {
          top: Math.floor(Math.random() * (450 - item.top)),
          left: Math.floor(Math.random() * (450 - item.left)),
        };
      }),
    );
  };

  return (
    <div>
      <button onClick={shuffle}>shuffle</button>
      <div id="map">
        <Barrel position={position[0]} />
        <Barrel position={position[1]} />
        <Barrel position={position[2]} />
      </div>
    </div>
  );
}

export default Map;
