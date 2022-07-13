import ApiServices from "../services/api-services";
import Todocomponent from "../component/Todocomponent";

import {useEffect, useState} from "react";


export default function Todospage(){
    let apiservice = new ApiServices('todos');
    let [todos,settodos] = useState([]);

    useEffect(()=>{
        apiservice.getAlldata().then(value=>settodos(value));
    },[])
    return(
        <div>
            {
                todos.map(value => <Todocomponent item={value} key={value.id}/>)
            }
        </div>
    );
}