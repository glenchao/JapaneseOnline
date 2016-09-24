import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import './index.css';
import App from './App';
import Schedule from './pages/schedule';
import Info from './pages/info';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Schedule}/>
            <Route path="/schedule" component={Schedule} />
            <Route path="/info" component={Info} />
        </Route>
    </Router>,
    document.getElementById('root')
);
