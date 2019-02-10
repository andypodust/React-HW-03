import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';

import Options from '../../Options/index';
import ButtonClear from '../../ButtonClear/index';
import Menu from '../../Menu/index';

import * as Api from '../../../services/api';

import s from './MenuPage.module.css';

export default class MenuPage extends Component {
  state = {
    listMenu: [],
    categories: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const currentCategory = queryString.parse(this.props.location.search)
      .category;
    this.setState({ isLoading: true });
    Api.getCategories()
      .then(categories => this.setState({ categories }))
      .catch(error => this.setState({ error, isLoading: false }));

    if (!currentCategory) {
      Api.getAllMenuItems().then(menu =>
        this.setState({ listMenu: menu, isLoading: false }),
      );
      return;
    }

    Api.getMenuItemsWithCategory(currentCategory).then(menu =>
      this.setState({ listMenu: menu, isLoading: false }),
    );
  }

  componentDidUpdate(prevProps) {
    const prev = queryString.parse(prevProps.location.search).category;
    const next = queryString.parse(this.props.location.search).category;

    if (prev === next) return;
    Api.getMenuItemsWithCategory(next).then(menu => {
      this.setState({ isLoading: true });
      this.setState({ listMenu: menu, isLoading: false });
    });

    if (next === undefined) {
      Api.getAllMenuItems().then(menu => {
        this.setState({ isLoading: true });
        this.setState({ listMenu: menu, isLoading: false });
      });
    }
  }

  handleClearBtn = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: ``,
    });
  };

  handleOptionChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { listMenu, categories, error, isLoading } = this.state;
    const currentValue = queryString.parse(this.props.location.search).category;

    return (
      <div className={s.MenuPage}>
        <h2>MenuPage</h2>
        <NavLink to={`${this.props.match.path}/add`}>Add new Dish</NavLink>
        <Options
          categories={categories}
          value={queryString.parse(this.props.location.search).category}
          handleOptionChange={this.handleOptionChange}
        />
        {currentValue && (
          <ButtonClear
            value={currentValue}
            handleClearBtn={this.handleClearBtn}
          />
        )}
        {error && <h2>Oooops... You have a problem! Try again =)</h2>}
        {isLoading && <p>Loading....</p>}
        <Menu list={listMenu} />
      </div>
    );
  }
}
