import React from 'react';

import s from './MenuItemPageContent.module.css';

const MenuItemPageContent = ({ content }) => (
  <div className={s.block}>
    <img src={content.image} alt={content.name} className={s.img} />
    <p>Name: {content.name}</p>
    <p>Price: {content.price}</p>
    <p>Description: {content.description}</p>
    <p>Category: {content.category}</p>
  </div>
);

export default MenuItemPageContent;
