import {people} from "../../../data.js";

const List = () =>{
    return(
        <div>
            {people.map((person)=>{
                return(
                    <div>{person.name}</div>
                )
            })}
        </div>
    )
}
export default List