import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

let content;

if (typeof window !== 'undefined') {
  content = (
    ReactDOM.hydrate(
      <App />,
      document.querySelector('#root')
    )
  )
  // registerServiceWorker();

} else {
  content = (<App />)
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;

        content = (
          ReactDOM.render(<NewApp />, document.getElementById('root'))
        );
    });
}

export default() => {
  return content
}
