function Barrel({ position, go, name, animation }) {
  return (
    <button
      onClick={go}
      style={{
        top: position.top,
        left: position.left,
        animationPlayState: animation.animationPlayState,
      }}
      className="barrel"
      name={name}
    ></button>
  );
}

export default Barrel;
