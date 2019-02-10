import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './Menu.module.css';

const Menu = ({ list, match, location }) => (
  <ul className={s.menuList}>
    {list.map(({ id, image, name, price }) => (
      <li key={id} className={s.menuItem}>
        <Link
          to={{
            pathname: `${match.url}/${id}`,
            state: { from: location },
          }}
        >
          <img src={image} alt={name} className={s.img} />
          <p>Name: {name}</p>
          <p>Price: {price}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(Menu);
