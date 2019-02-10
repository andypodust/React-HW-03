import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation/index';
import MainPage from './Pages/MainPage/index';
import MenuPage from './Pages/MenuPage/index';
import MenuItemPage from './Pages/MenuItemPage/index';
import AddItemMenuPage from './Pages/AddItemMenuPage/index';

const Admin = () => (
  <div>
    <Navigation />
    <hr />
    <Switch>
      <Route exact path="/menu/add" component={AddItemMenuPage} />
      <Route exact path="/menu/:id" component={MenuItemPage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route component={MainPage} />
    </Switch>
  </div>
);

export default Admin;
