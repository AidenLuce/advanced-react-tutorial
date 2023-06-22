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
    console.log('hmm this is interesting')
      const id = setInterval(()=>{
          console.log('hello from interval')
      },1000)
      return () => {
        clearInterval(id)
      }
  },[])
  return <h1>Hello there</h1>
}

export default CleanupFunction;
