import {useDispatch} from "react-redux";

import {carAction} from "../../redux";

export default function Car({car}){
    const {model,id,price,year} = car;
    const dispatch = useDispatch();
    return(
        <div>
         <div>id:{id}</div>
         <div>model:{model}</div>
         <div>price:{price}</div>
         <div>year:{year}</div>
            <button onClick={()=>dispatch(carAction.setUpdateCar(car))}>update</button>
            <button onClick={()=>dispatch(carAction.deleteById({id}))}>Delete</button>


        </div>
    );
}
export {Car};