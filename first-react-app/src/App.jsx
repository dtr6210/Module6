import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";

function App() {
  const [count, setCount] = useState(0);

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const testFunction = () => {
    console.log('if you see this, something is wrong');
  }

  const spideyJSX = (
  <>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote>
    <cite>{spiderman.alterEgo}</cite>
   </>);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="nonreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* {spideyJSX}
      <ExampleComponent name='Cool Dude' />
      <PropsDisplayer name='Jarry Style' age={29} pets={['cat ' , 'dog ', 'goldfish ' ]} testFunction={testFunction} ExampleComponent={ExampleComponent}/>
      <City name='Chicago' />
      <City name='Newcastle' state='IL' country='US of A'>
        <div>Newcastle is a harbor city in the Aussie state of NSW</div>
        <div><strong>Population:</strong> 322,278 (2016)</div>
        </City>
        <Pet type='Cat' name={1} colour='' shouldRender /> */}
        <Greeting name='John'/>
        <Greeting name='Bobby'> What up???!!!?!?!?!!?</Greeting>
    </>
  );
}

export default App;
