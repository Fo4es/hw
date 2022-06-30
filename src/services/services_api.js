import axios from "axios";

let axiosInastance =  axios.create({
    baseURL:"http://jsonplaceholder.typicode.com/comments",
    headers:{'Content-type': 'application/json; charset=UTF-8'},
});
const savePost = (post)=> axiosInastance.post('',{data:post});
export {savePost}