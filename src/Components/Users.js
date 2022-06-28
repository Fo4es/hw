import {useEffect, useState} from "react";
import { getUsers} from "../services/user_api_service";
import User from "./User";



export default function Users({getPostid}) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, [])


    return (
        <div>
            {users.map(value => <User item={value} getPostid={getPostid} key = {value.id}/>)}

        </div>
    );
}