import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './search';
import '.././style.css';

export default (props) => {
  return(
    <nav className="nav">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
      <Search cards={props.cards}/>
    </nav>
  )
}