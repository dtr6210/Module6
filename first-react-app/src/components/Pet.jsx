function Pet(props) {
  let type = "unknown";

  if (props.type) {
    type = props.type
  }

  return(
    <div>
        <h2>My Pet</h2> <p>Type: {type}</p>
{
    //1. expression (true/false)
    //2. ? true block
    //3. : false block
}
{props.name ? <p>Name: {props.name}</p> : null}

{!props.colour && <p>Colour: {props.colour}</p>}

{props.shouldRender && <p>Render Me!</p>}

    </div>
  )
}

export default Pet;
