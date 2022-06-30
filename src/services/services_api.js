import axios from "axios";

let axiosInastance =  axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users",
    headers:{'Content-type': 'application/json; charset=UTF-8'},
});
const saveUser = (user)=> axiosInastance.post('',{data:user});
export {saveUser}