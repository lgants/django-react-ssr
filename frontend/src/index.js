import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// import ReactDOM from 'react-dom';
// import React from 'react';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
// 
// let content;
//
// if (typeof window !== 'undefined') {
//   content = (
//     ReactDOM.hydrate(
//       <App />,
//       document.querySelector('#root')
//     )
//   )
//
// } else {
//   content = (<App />)
// }

// export default() => {
//   return content
// }
