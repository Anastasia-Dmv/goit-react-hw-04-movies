import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../utils/routes';
import '../index.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routes.home}
        className="nav-link"
        activeClassName="nav-link_active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className="nav-link"
        activeClassName="nav-link_active"
      >
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
