import image from './barrel3.png';

function Barrel({ position, go, name, animation }) {
  return (
    <img
      src={image}
      alt="barrel"
      onClick={go}
      style={{
        top: position.top,
        left: position.left,
        animationPlayState: animation.animationPlayState,
        backgroundColor: animation.backgroundColor,
      }}
      className="barrel"
      name={name}
    ></img>
  );
}

export default Barrel;
