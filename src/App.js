import {Link, Route,Routes} from "react-router-dom";
import Todospage from "./pages/Todospage";
import Albumpage from "./pages/Albumpage";
import Commentspage from "./pages/Commentspage";
import Commentdetails from "./pages/Commentdetails";
function App() {
  return (
      <div>
          <div>
              <h2>Menu</h2>
              <ul>
                  <li><Link to={'/todos'}>todos</Link></li>
                  <li><Link to={'/album'}>album</Link></li>
                  <li><Link to={'/comments'}>comments</Link></li>
              </ul>
          </div>

          <div>
              <Routes>
                  <Route path={'/todos'} element={<Todospage/>}/>
                  <Route path={'/album'} element={<Albumpage/>}/>
                  <Route path={'/comments'} element={<Commentspage/>}>
                    <Route path={':id'} element={<Commentdetails/>}/>
                    </Route>
              </Routes>
          </div>

      </div>
  );
}

export default App;

