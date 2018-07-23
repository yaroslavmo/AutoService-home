import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Util } from "reactstrap";


Util.setGlobalCssModule(bootstrap);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
