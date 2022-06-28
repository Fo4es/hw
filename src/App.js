import Users from "./Components/Users";
import {useState} from "react";
import {getPosts} from "./services/user_api_service";
import Posts from "./Components/Posts";




function App() {
  let [posts, setPosts] = useState([]);
  const getPostid = (id)=>{
       getPosts(id).then(({data}) =>setPosts([...data]))
  }
  return (<div>

    <Users getPostid={getPostid}/>
 <Posts posts={posts}/>

  </div>);
}

export default App;
