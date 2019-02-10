import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => (
  <ul className={s.Navigation}>
    <li className={s.NavItem}>
      <NavLink className={s.Link} to="/">
        Main page
      </NavLink>
    </li>
    <li className={s.NavItem}>
      <NavLink className={s.Link} to="/menu">
        Menu
      </NavLink>
    </li>
  </ul>
);
export default Navigation;
