import checkCollision from './checkCollision';
import randomPosition from './randomPosition';

export default function barrelsWithRandomPosition(counter) {
  const array = [];
  for (let i = 0; i < counter; i++) {
    let barrel = randomPosition();
    (function recursiveRandomPosition() {
      if (checkCollision(array, barrel)) {
        barrel = randomPosition();
        recursiveRandomPosition();
      } else {
        array.push(barrel);
      }
    })();
  }
  return array;
}
