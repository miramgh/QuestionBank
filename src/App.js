
import './css/css/main.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home'
import Performance from './components/Performance/Performance'
import Study from './components/Study/Study'
import Catalog from './components/Catalog/Catalog'
import Me from './components/Me/Me'



import Nav from './components/Nav/Nav'




export default function App() {


  return (
    

    
    <Router>
      <Nav/>
      <div className="App">
          <Switch>
          <Route exact path="/Home">
              <Home/>
          </Route>
          <Route path="/Catalog">
              <Catalog/>
          </Route>
          <Route path="/Study">
              <Study/>
          </Route>
          <Route path="/Performance">
              <Performance/>
          </Route>
          <Route path="/Me">
              <Me/>
          </Route>
          
          </Switch>
      </div>
    </Router>
  
  
  );
}


