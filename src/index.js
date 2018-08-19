import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'

ReactDOM.render(
		// <HelloWorld txt = 'Hello World From Component React.js' />,
		<PropsValidation name="123" age="29" height="1.76" />,
		document.getElementById("root")
	)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
