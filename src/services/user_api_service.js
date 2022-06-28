import axios from "axios";

let axiosInstance = axios.create({
   baseURL:'https://jsonplaceholder.typicode.com/users'
})
const getUsers = ()=>
    axiosInstance.get('');

const getPosts = (id)=>
    axiosInstance.get('/'+ id +'/posts');

export {getUsers,getPosts};