import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import PostsProvider from './providers/PostsProvider';
import './index.scss';
import UserProvider from './providers/UserProviders';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
);
