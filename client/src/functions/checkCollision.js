export default function checkCollision(array, currentBarrel) {
  const width = 50;
  const height = 50;
  if (
    array.some((barrel) => {
      return (
        currentBarrel.left < barrel.left + width &&
        currentBarrel.left + width > barrel.left &&
        currentBarrel.top < barrel.top + height &&
        currentBarrel.top + height > barrel.top
      );
    })
  ) {
    return true;
  } else {
    return false;
  }
}
