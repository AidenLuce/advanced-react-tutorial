import { useState } from 'react';

const ShortCircuitOverview = () => {
  // Falsy
  const [text, setText] = useState('')
  // Truthy
  const [name, setName] = useState('susan')
  return <div>
    {/*{if(someCondition){"wont work"}}*/}
    <h4>Falsy OR : {text || "hello world"}</h4>
    <h4>Falsy AND : {text && "hello world"}</h4>
    <h4>Truthy OR : {name || "hello world"}</h4>
    <h4>Truthy AND : {name && "hello world"}</h4>
  </div>;
};
export default ShortCircuitOverview;
