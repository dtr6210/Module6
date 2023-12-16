import "../styles/ExampleComponent.css";

function ExampleComponent(props) {
    
const divStyle = {
    textTransformm: 'uppercase',
    color: 'orange'
}
    
  return (
    <div className="ExampleComponent componentBox">
      <h1 style={divStyle}>My Example Component</h1>
      <p>My first React component</p>
      <h2 style={{ fontWeight: "bold", backgroundColor: "lightblue" }}>
        {props.name}
      </h2>
    </div>
  );
}

export default ExampleComponent;
