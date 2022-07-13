import ApiServices from "../services/api-services";
import Commentcomponent from "../component/Commentcomponent";

import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";


export default function Commentspage(){
    let apiservice = new ApiServices('comments');
    let [comments,setcomments] = useState([]);

    useEffect(()=>{
        apiservice.getAlldata().then(value=>setcomments(value));

    },[])
    return(
        <div>
            <Outlet/>
            {
                comments.map(value => <Commentcomponent item={value} key={value.id}/>)
            }

            <div>


                </div>
        </div>
    );
}