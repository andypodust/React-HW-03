import React from 'react';
import AddItemMenu from '../../AddItemMenu/index';

const AddItemMenuPage = props => (
  <>
    <h2>Add new dish</h2>
    <AddItemMenu {...props} />
  </>
);

export default AddItemMenuPage;
