import React from 'react';
import { Route } from 'react-router-dom';

import Admin from './Admin/index';

const App = () => (
  <>
    <Route component={Admin} />
  </>
);

export default App;
