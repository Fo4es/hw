import ApiServices from "../services/api-services";
import Albumcomponent from "../component/Albumcomponent";

import {useEffect, useState} from "react";


export default function Albumpage(){
    let apiservice = new ApiServices('albums')
    let [albums,setalbums] = useState([])

    useEffect(()=>{
        apiservice.getAlldata().then(value=>setalbums(value))
    },[])
    return(
        <div>
            {
                albums.map(value => <Albumcomponent item={value} key={value.id}/>)
            }
        </div>
    );
}