import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from "./components/boardList";
import NaviBar from "./components/naviBar";
import Error404 from "./components/static/Error404";
import {Home} from "./components/static/Home";
import {Users} from "./components/static/Users";

function App() {
  return (
   <Router>
       <NaviBar />
     <main>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/boards" component={BoardList}/>
             <Route path="/users" component={Users}/>
             <Route path="*"> <Error404/> </Route>
         </Switch>
     </main>
   </Router>
  );
}

export default App;
