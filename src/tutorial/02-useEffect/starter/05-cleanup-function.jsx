import {useEffect, useState} from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
      <div>
        <button className='btn' onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <RandomComp/>}
      </div>
  );
};

const RandomComp = () => {
  useEffect(()=>{
      const someFunc = () => {
      //     Some Logic
      }
      window.addEventListener('scroll', someFunc)
      return () => window.removeEventListener('scroll',someFunc)
  },[])
  return <h1>Hello there</h1>
}

export default CleanupFunction;
