import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Postcomponent from "../component/Postcomponent";
import ApiServices from "../services/api-services";



export default function Commentdetails(){
         let [posts,setPost] = useState([]);
         let apiservice = new ApiServices('posts');
         let {id} = useParams();

         useEffect(()=>{
             apiservice.getSingledata(id).then(value=> setPost([{...value}]))
         },[id])


    return(
        <div>

            {
                posts.map(value => <Postcomponent item={value} key={value.id}/> )

            }
        </div>
    );
}