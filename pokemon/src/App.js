import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Fav from './pages/favorites';
import Pok from './pages/pokemon';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/favorites"} component={Fav} />
        <Route path={"/pokemon/:pokemonName"} component={Pok} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
