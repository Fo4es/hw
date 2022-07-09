import {Link} from "react-router-dom";

export default function Commentcomponent({item}){
    let {id,postId,name} = item
    return(
        <div>
            {id} - {name}
            <span><Link to={postId.toString()} >details</Link></span>
        </div>
    );
}
