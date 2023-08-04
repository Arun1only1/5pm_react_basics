import { useState } from "react";

const Counter = () => {
  // state
  const [num1, setNum1] = useState(0);
  //   console.log("num", num);

  const [num2, setNum2] = useState(0);

  const changeHandler1 = (event) => {
    const newValue = event.target.value;
    setNum1(newValue);
  };

  const changeHandler2 = (event) => {
    const newValue = event.target.value;
    setNum2(newValue);
  };

  const buttonClicked = () => {
    console.log(+num1 + +num2);
  };
  return (
    <div>
      <p>Enter a number</p>
      <input type="text" onChange={changeHandler1} />

      <p>Enter another number</p>
      <input type="text" onChange={changeHandler2} />
      <button onClick={buttonClicked}>Click me</button>
    </div>
  );
};

export default Counter;
