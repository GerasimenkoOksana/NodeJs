import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css';

import BoardList from "./components/boardList";
import Error404 from "./components/static/Error404";

function App() {
  return (
   <Router>
     <main>
         <Switch>
            <Route exact path="/"> <BoardList /> </Route>
            <Route path="*"> <Error404/> </Route>
         </Switch>
     </main>
   </Router>
  );
}

export default App;
