import {useState} from "react";

const UseStateBasics = () => {
  // console.log(useState(1))
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count + 1)
  }
  return (
      <div>
        <h4>You Clicked {count} times</h4>
        <button type='button' onClick={handleClick}>Click me</button>
      </div>
  );
};

export default UseStateBasics;
