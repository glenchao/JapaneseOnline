import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// initialize database
import './stores/init';
// import components
import './index.css';
import App from './App';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Admin from './pages/admin';
import Schedule from './pages/schedule';
import ScheduleStudent from './pages/scheduleStudent';
import Info from './pages/info';
import LoginMain from './pages/loginMain';
import Login from './pages/login';
import Signup from './pages/signup';
import Book from './pages/book';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/aboutUs" component={AboutUs} />
        </Route>
        <Route path="/loginMain" component={LoginMain}>
            <IndexRoute component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Route>
        <Route path="/admin" component={Admin}>
            <IndexRoute component={Info} />
            <Route path="/admin/schedule" component={Schedule} />
            <Route path="/admin/schedule/student" component={ScheduleStudent} />
            <Route path="/admin/info" component={Info} />
            <Route path="/admin/book" component={Book}>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);

    // <Router history={browserHistory}>
    //     <Route path="/loginMain" component={LoginMain}>
    //         <IndexRoute component={Login} />
    //         <Route path="/login" component={Login} />
    //         <Route path="/signup" component={Signup} />
    //     </Route>
    //     <Route path="/" component={App}>
    //         <IndexRoute component={Schedule} />
    //         <Route path="/schedule" component={Schedule} />
    //         <Route path="/schedule/student" component={ScheduleStudent} />
    //         <Route path="/info" component={Info} />
    //         <Route path="/book" component={Book}>
    //         </Route>
    //     </Route>
    // </Router>,