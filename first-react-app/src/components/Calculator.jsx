import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const handleNumChange = (e, num) => {
    const value = e.target.value;
    if (num === 1) {
        console.log(`Setting num1 to ${value}`);
      setNum1(value);
    } else {
        console.log(`Setting num2 to ${value}`);
      setNum2(value);
    }
  };

  const handleOperatorChange = (e) => {
    const selectedOperator = e.target.value;
    setOperator(selectedOperator);
  };

  const calculateResult = () => {
    console.log(`Calculating result ${result}`);
    if (num1 !== "" && num2 !== "" && operator !== "") {
      switch (operator) {
        case "+":
          setResult(parseFloat(num1) + parseFloat(num2));
          break;
        case "-":
          setResult(parseFloat(num1) - parseFloat(num2));
          break;
        case "*":
          setResult(parseFloat(num1) * parseFloat(num2));
          break;
        case "/":
          setResult(parseFloat(num1) / parseFloat(num2));
          break;
        default:
          setResult("Invalid operator");
      }
    } else {
      setResult("Please enter numbers and operator");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => handleNumChange(e, 1)}
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => handleNumChange(e, 2)}
      />
      <button onClick={calculateResult}>=</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
