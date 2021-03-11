
import './App.css';
import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import ClubDetails from './components/ClubDetails/ClubDetails';


function App() {


  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/TeamDetails/:idTeam">
          <ClubDetails></ClubDetails>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
