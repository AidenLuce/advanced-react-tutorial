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
  },[])
  return <h1>Hello there</h1>
}

export default CleanupFunction;
