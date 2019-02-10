import React, { Component } from 'react';
import MenuItemPageContent from './MenuItemPageContent/index';
import * as api from '../../../services/api';

import s from './MenuItemPage.module.css';

export default class MenuItemPage extends Component {
  state = {
    menuItem: {},
  };

  componentDidMount() {
    api.getMenuItemById(this.props.match.params.id).then(menuItem => {
      this.setState({
        menuItem,
      });
    });
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/menu',
      search: ``,
    });
  };

  render() {
    const { menuItem } = this.state;

    return (
      <div>
        <MenuItemPageContent content={menuItem} />
        <button className={s.Button} type="button" onClick={this.handleGoBack}>
          GoBack
        </button>
      </div>
    );
  }
}
