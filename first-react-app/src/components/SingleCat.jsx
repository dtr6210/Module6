function Cat({ name, latinName, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <span>({latinName})</span>
      <div>
        <img src={image} alt={`${name}: ${latinName}`} />
      </div>
    </div>
  );
}

export default Cat;
