import React, {useState} from "react"

function Calculator() {

  const [calculateNumbers, setCalculateNumbers] = useState(0);
  const [secondNumber, setSecondNumber] = useState(null);
  const [isSecondNumberSet, setIsSecondNumberSet] = useState(false);

  function handleClick(number, operation) {
    setCalculateNumbers(number)
    if (!isSecondNumberSet && (operation === "/" || operation === "*" || operation === "-" || operation === "+")) {
      setSecondNumber(number);
      setIsSecondNumberSet(true);
    }
  }

  function calculate(operation) {
    if (isSecondNumberSet) {
      let tempSecondNumber = secondNumber;
      if (operation === "/") {
        setCalculateNumbers(calculateNumbers / tempSecondNumber);
      } else if (operation === "*") {
        setCalculateNumbers(calculateNumbers * tempSecondNumber);
      } else if (operation === "-") {
        setCalculateNumbers(calculateNumbers - tempSecondNumber);
      } else if (operation === "+") {
        setCalculateNumbers(calculateNumbers + tempSecondNumber);
      }
      setIsSecondNumberSet(false);
    }
  };
  
  return(
    <div className="buttons-container">
      <p className="display">{calculateNumbers}</p>
      <br />
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button className="right-button" onClick={() => calculate("/")}>&divide;</button> 
      <br />
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button> 
      <button className="right-button" onClick={() => calculate("*")}>x</button><br />
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(9)}>9</button>
      <button className="right-button" onClick={() => calculate("-")}>-</button><br />
      <button onClick={() => handleClick(0)}>0</button>
      <button>.</button>
      <button>=</button>
      <button className="right-button" onClick={() => calculate("+")}>+</button>
    </div>
  );

};

export default Calculator;