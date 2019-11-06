import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Documentacion from './Components/Documentacion';
import Acerca from './Components/Acerca';

import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Documentacion" component={Documentacion} /> 
        <Route exact path="/Acerca" component={Acerca} />      
      </Switch>
    </div>
  );
}

export default App;
