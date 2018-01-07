import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let content;

if (typeof window !== 'undefined') {
  content = (
    ReactDOM.hydrate(
      <App />,
      document.querySelector('#root')
    )
  )
  registerServiceWorker();

} else {
  content = (<App />)
}

export default() => {
  return content
}
