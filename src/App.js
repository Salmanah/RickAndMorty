import React from 'react';
import './App.css';
import CharacterView from './components/character/Character'
import MainView from './views/Main'
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (

    <div className="container-fluid" style={{"textAlign":"center"}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/:id" component={CharacterView}></Route>
        </Switch>
      </Router>
    </div>
  );
}

const Main = () =>(
  <MainView></MainView>
)


export default App;
