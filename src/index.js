import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// initialize database
import './stores/init';
// import components
import './index.css';
import App from './App';
import Schedule from './pages/schedule';
import Info from './pages/info';
import Login from './pages/login';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Schedule}/>
            <Route path="/schedule" component={Schedule} />
            <Route path="/info" component={Info} />
            <Route path="/login" component={Login} />
        </Route>
    </Router>,
    document.getElementById('root')
);
