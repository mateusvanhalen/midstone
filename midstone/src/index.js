import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Midstone from './Midstone'
import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/NavBar/NavBar';
//Route included to wrap and make routing happen
ReactDOM.render(

    <Router>
    <Midstone />
    </Router>

    ,document.getElementById('root'));

registerServiceWorker();