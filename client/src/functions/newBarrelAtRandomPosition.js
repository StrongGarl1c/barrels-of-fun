import checkCollision from './checkCollision';
import randomPosition from './randomPosition';

export default function newBarrelAtRandomPosition(array = []) {
  let barrel = randomPosition();
  while (checkCollision(array, barrel)) {
    barrel = randomPosition();
  }
  return barrel;
}
