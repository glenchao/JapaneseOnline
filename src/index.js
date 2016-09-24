import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import './index.css';
import App from './App';
import Schedule from './pages/schedule';
import Info from './pages/info';
import LoginMain from './pages/loginMain';
import Login from './pages/login';
import Signup from './pages/signup';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/loginMain" component={LoginMain}>
            <IndexRoute component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Route>
        <Route path="/" component={App}>
            <IndexRoute component={Schedule} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/info" component={Info} />
        </Route>
    </Router>,
    document.getElementById('root')
);
