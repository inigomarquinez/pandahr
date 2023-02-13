import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Main } from '../../layout';
import router from '../../routes';

const App = () => (
  <Main>
    <RouterProvider router={router} />
  </Main>
);

export default App;
