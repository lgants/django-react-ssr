import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

let content;

console.log(false && typeof window !== 'undefined')

if (false && typeof window !== 'undefined') {
  console.log("yolobro")
  content = (
    ReactDOM.hydrate(
      <App />,
      document.getElementById('root')
    )
  )
  // registerServiceWorker();

} else {
  content = (
    ReactDOM.render(
    <App />,
    document.getElementById('root')
    )
  )
}

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   console.log("hot")
//     module.hot.accept('./components/App', () => {
//         const NewApp = require('./components/App').default;
//
//         content = (
//           ReactDOM.render(<NewApp />, document.getElementById('root'))
//         );
//     });
// }

export default() => {
  return content
}
