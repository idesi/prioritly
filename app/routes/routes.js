import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import TodosList from '../components/TodosList';
import TodoDetail from '../components/TodoDetail';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={TodosList} />
            <Route path="todo/:id" component={TodoDetail} />
        </Route>
    </Router>
)

export default routes;
