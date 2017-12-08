import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import HomeRoot from './roots/HomeRoot';
import AdminsListRoot from './roots/AdminsListRoot';
import NotFoundRoot from './roots/NotFoundRoot';
import UsersListRoot, { loadData } from './roots/UsersListRoot';

// HomeRoot is an object with key of component
export default [
  {
    ...App,
    routes: [
      {
        ...HomeRoot,
        path: '/',
        exact: true
      },
      {
        ...AdminsListRoot,
        path: '/admins'
      },
      {
        ...UsersListRoot,
        path: '/users'
      },
      {
        ...NotFoundRoot
      }
    ]
  }
]
