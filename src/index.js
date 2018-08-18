import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HelloWorld from './HelloWorld'

ReactDOM.render(
		<HelloWorld txt = 'Hello World From Component React.js' />,
		document.getElementById("root")
	)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
