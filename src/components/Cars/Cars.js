import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Car from "../Car/Car";
import {carAction} from "../../redux";

export default function Cars(){
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(()=>{
         dispatch(carAction.getAll())
    },[])
    return(
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
}