import newBarrelAtRandomPosition from './newBarrelAtRandomPosition';

export default function barrelsWithRandomPosition(counter) {
  const array = [];
  for (let i = 0; i < counter; i++) {
    array.push(newBarrelAtRandomPosition(array));
  }
  return array;
}
