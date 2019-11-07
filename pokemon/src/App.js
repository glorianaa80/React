import React from 'react';
import Home from './pages/home'
import Fav from './pages/favorites';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/favorites"} component={Fav} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;