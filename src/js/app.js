/**
 *
 * app.js
 *
 * This is the entry file for the application.
 * Routes are configured at the end of the file.
 *
 */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), window.document.getElementById('app'));

