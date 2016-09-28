import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// initialize database
import './stores/init';
// import components
import './index.css';
import App from './App';
import Schedule from './pages/schedule';
import ScheduleStudent from './pages/scheduleStudent';
import Info from './pages/info';
import LoginMain from './pages/loginMain';
import Login from './pages/login';
import Signup from './pages/signup';
import Book from './pages/book';
import Teacher_1 from './pages/teacher_1';
import Teacher_2 from './pages/teacher_2';

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
            <Route path="/schedule/student" component={ScheduleStudent} />
            <Route path="/info" component={Info} />
            <Route path="/book" component={Book}>
                <Route path=":teacherId" component={Teacher_1} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);