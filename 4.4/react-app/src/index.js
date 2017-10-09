import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App cat={5} txt="this is the prop value" />, document.getElementById('root'));
registerServiceWorker();
