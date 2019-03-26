import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// if it's not default, must be destructured
// import { robots } from './robots';

ReactDOM.render (
	<App />, 
	document.getElementById('root'));

serviceWorker.unregister();
