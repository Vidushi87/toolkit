import React, { useState } from "react";
import KeysWindow from "./KeysWindow";
import DisplayWindow from "./DisplayWindow";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [displayExp, setDisplayExp] = useState("");
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState([]);

  const sciFunc = {
    sin: "Math.sin",
    cos: "Math.cos",
    tan: "Math.tan",
    ln: "Math.log",
    log: "Math.log10",
    π: "Math.PI",
    e: "Math.E",
    "^": "**",
    "√": "Math.sqrt",
  };

  const calcResult = () => {
    if (expression.length !== 0) {
      try {
        let compute = eval(expression);
        compute = parseFloat(compute.toFixed(4));
        setResult(compute);
      } catch (error) {
        setResult("An Error Occured!");
      }
    } else {
      setResult("An Error Occured!");
    }
  };
  const handleButton = (value) => {
    console.log(value);
    if (value === "AC") {
      setExpression("");
      setDisplayExp("");
      setResult("0");
    } else if (value === "DEL") {
      setDisplayExp(displayExp.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else if (sciFunc.hasOwnProperty(value)) {
      setDisplayExp(displayExp + value);
      setExpression(expression + sciFunc[value]);
    } else if (value === "!") {
      const lastNum = extractLastNum(expression);
      if (lastNum !== null) {
        const num = parseFloat(lastNum);
        setDisplayExp(displayExp + value);
        setExpression(expression.replace(lastNum, factorial(num)));
      }
    } else if (value === "=") {
      calcResult();
    } else {
      setDisplayExp(displayExp + value);
      setExpression(expression + value);
    }
  };

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
  }

  function extractLastNum(exp) {
    const numbers = exp.match(/\d+/g);
    return numbers ? numbers[numbers.length - 1] : null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <center>
          <h1>Calculator</h1>
        </center>
        <DisplayWindow expression={displayExp} result={result} />
        <KeysWindow handleButton={handleButton} />
      </div>

       {/* History Section */}
       <div className={styles.history}>
        <h2>History</h2>
        {history.length > 0 ? (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.expression} = {item.result}
              </li>
            ))}
          </ul>
        ) : (
          <p>No history yet</p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
