import { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson]=useState({
        name: 'peter',
        age: 24,
        hobby: 'read books'
    })

  const displayPerson=()=>{
    setPerson({
        name: 'john',
        age: 28,
        hobby: 'scream at computer'
    })
  }

    const {name, age, hobby} = person
  return (
      <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h4>Enjoys: {hobby}</h4>
        <button type='button' onClick={displayPerson}>Show John</button>
      </>
      );
};

export default UseStateObject;
