import {data} from "../../../data.js";
import React from "react";


const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)

  const removeItem=(id)=>{
    const newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople);
  }


  const clearItems=()=>{
    setPeople([])
  }

  return (
      <section>
        {people.map((person)=>{
          const {id, name}=person;
          return(
                <div key={id}>
                  <h4>{name}</h4>
                  <button type='button' onClick={()=>removeItem(id)}>Remove</button>
                </div>
          )
        })}
        <button
            type='button'
            style={{marginTop:'2rem'}}
            className='btn'
            onClick={clearItems}
        >
          Clear All
        </button>
      </section>
      )

};

export default UseStateArray;
