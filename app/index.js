import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import VisibleTodoList from './components/VisibleTodoList';
import TodoDetail from './components/TodoDetail';
import {fetchTodos} from './actions';
// Do this once before any other code in your app
import 'babel-polyfill';
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

store.dispatch(
    fetchTodos()
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={VisibleTodoList} />
                <Route path="todo/:id" component={TodoDetail} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'));
