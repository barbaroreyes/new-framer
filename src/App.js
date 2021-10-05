import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
     <Route  exact path="/">
        <Home />
     </Route>
     <Route exact path="/about">
       About
     </Route>
     <Route exact path="/portafolio">
       portafolio
     </Route>
      </Switch>
   
    </div>
  );
}

export default App;
