import {useEffect, useState} from "react";
import Ship from "./Ship";

export default function Ships(){
    let [ships,setShips]= useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setShips(value.filter(value=>value.launch_year!=="2020"));
            });
    },[]);

    return(
        <div>
            {ships.map(ship=><Ship item={ship}/>)}
        </div>
    );
}