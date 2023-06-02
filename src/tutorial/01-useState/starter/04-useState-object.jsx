import { useState } from 'react';

const UseStateObject = () => {
  const[name, setName]=useState('Peter')
  const[age, setAge]=useState(24)
  const[hobby, setHobby]=useState('read books')

  const displayPerson=()=>{
    setName('john')
    setAge(28)
    setHobby('scream at the computer')
  }

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
