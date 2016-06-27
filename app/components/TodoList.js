import React from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {List} from 'material-ui/List';
import {connect} from 'react-redux';
import Todo from './Todo';

const style = {
  container: {
    position: 'relative',
    margin: '10px auto'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const TodoList = (props) => {
    var todos = props.todos.map((todo) => {
        return <Todo key={todo._id} {...todo} onClick={() => props.onTodoClick(todo)} />
    });
    return (
        <div>
            <Tabs>
                <Tab label='All' onActive={() => {props.onVisibilityFilterChange('all')}}>
                    {todos}
                </Tab>
                <Tab label='Active' onActive={() => {props.onVisibilityFilterChange('active')}}>
                    {todos}
                </Tab>
                <Tab label='Completed' onActive={() => {props.onVisibilityFilterChange('completed')}}>
                    {todos}
                </Tab>
            </Tabs>
        </div>
    )
}

export default TodoList;
