import {people} from "../../../data.js";
import {Person} from "./Person";

const List = () =>{
    return(
        <div>
            {people.map((person)=>{
                return <Person key={person.name} {...person}/>
            })}
        </div>
    )
}
export default List