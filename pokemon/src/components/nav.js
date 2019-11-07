import React from 'react';
import { NavLink } from 'react-router-dom';
import '.././style.css';

export default () => {
  return(
    <nav className="nav">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
    </nav>
  )
}