import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </li>
        {/* Додайте інші посилання за потребою */}
      </ul>
    </nav>
  );
};

export default Header;
