import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import './components/NovaPoshta.js';
import NovaPoshta from "./components/NovaPoshta";
import Home from "./components/static/pages/home";
import Error404 from "./components/static/errors/Error404";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import NpContainer from "./components/novaposhta/npContainer";
import Auth from "./components/auth/Auth";

function App() {
    //комментарий
    /*комментарий */
  return (
      <Router>

          <Header/>
        <div className="cont"><Auth/></div>
          <main>
              <Switch>
                  <Route exact path="/"> <Home/> </Route>
                  <Route path="/np"> <NpContainer/> </Route>
                  <Route path="*"> <Error404/> </Route>
              </Switch>
          </main>
          <div className="footer"> <Footer/>  </div>

      </Router>

  );
}

export default App;
