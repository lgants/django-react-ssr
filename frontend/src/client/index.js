import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';

let content;

if (typeof window !== 'undefined') {
  content = (
    ReactDOM.hydrate(
      <App />,
      document.querySelector('#root')
    )
  )

} else {
  content = (<App />)
}

export default() => {
  return content
}
