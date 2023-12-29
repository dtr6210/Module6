import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import CatList from "./components/BigCat";
import Emoji from "./components/Emoji";
import Calculator from "./components/Calculator";




function App() {
  const [count, setCount] = useState(0);



  const testFunction = () => {
    console.log('if you see this, something is wrong');
  }



  return (
    <>

        <Greeting name='John'/>
        <Greeting name='Bobby'> What up???!!!?!?!?!!?</Greeting>
        <CatList />
        <Emoji />
        <Calculator />
    </>
  );
}

export default App;
