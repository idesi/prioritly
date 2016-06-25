import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import {toggleTodo, changePriority, setVisbilityFilter} from '../actions';

const filterTodos= (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.isComplete);
        case 'active':
            return todos.filter(t => !t.isComplete);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onPriorityChange: (id, newPriority) => {
            dispatch(changePriority(id, newPriority));
        },
        onVisibilityFilterChange: (filter) => {
            dispatch(setVisbilityFilter(filter));
        }
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
