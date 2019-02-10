import React, { Component } from 'react';
import * as api from '../../services/api';

import Category from '../Options/index';

export default class AddItemMenu extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    ingredients: '',
    price: '',
    category: '',
    categories: [],
  };

  componentDidMount() {
    api.getCategories().then(categories => this.setState({ categories }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleOptionsChange = value => {
    this.setState({
      category: value,
    });
  };

  // Focus on /menu update
  handleSubmitForm = async e => {
    e.preventDefault();

    const post = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      ingredients: this.state.ingredients,
      price: this.state.price,
      category: this.state.category,
    };

    await api.postMenuItem(post);

    this.props.history.push({
      pathname: '/menu',
      search: ``,
    });
  };

  render() {
    const {
      name,
      description,
      image,
      ingredients,
      price,
      category,
      categories,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
          required
        />

        <Category
          categories={categories}
          handleOptionChange={this.handleOptionsChange}
          value={category}
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Enter URL"
          value={image}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Create new dish</button>
      </form>
    );
  }
}
