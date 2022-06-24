import {useEffect,useState} from "react";
import User from "./User";
export default function Users(){
    let [users, setUsers]= useState([]);
    let [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                
                setUsers(value);
            });
    },[]);

    const dani=(item)=>{
        setUser(item);
    }
    return(<div>
            {user.id && <div>{user.username} {user.website}</div>}
            {users.map(user=><User key={user.id} dani={dani} item={user}  />)}
        </div>
    );
}