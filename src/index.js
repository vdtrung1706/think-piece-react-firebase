import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import PostsProvider from './providers/PostsProvider';

import './index.scss';
import UserProvider from './providers/UserProviders';

render(
  <UserProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </UserProvider>,
  document.getElementById('root')
);
