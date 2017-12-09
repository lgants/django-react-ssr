import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

// ReactRouterConfig passes components to App with prop route, which contains a routes prop, to render children
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
}



export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}
