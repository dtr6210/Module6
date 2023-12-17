import "../styles/Cat.css"

function Cat({ name, latinName, image }) {
  return (
    <div className="cat-container">
      <h3>{name}</h3>
      <span>({latinName})</span>
      <div className="cat-image-container">
        <img className="cat-image" src={image} alt={`${name}: ${latinName}`} />
      </div>
    </div>
  );
}

export default Cat;
