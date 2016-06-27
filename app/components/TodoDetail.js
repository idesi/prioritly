import React from 'react';
import {connect} from 'react-redux';
import {putTodo, destroyTodo} from '../actions';
import {Link, browserHistory} from 'react-router';

const findTodo = (todos, id) => {
    return todos.find(t => t._id === id);
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (todo) => {
            dispatch(putTodo(todo))
        },
        onDelete: (id) => {
            dispatch(destroyTodo(id))
        }
    };
}

class TodoDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
            // let TodoDetail =  ({todos, routeParams, onSubmit}) => {
            const todo = findTodo(this.props.todos, this.props.routeParams.id);
            let ddlPriority, txtTitle, txtDescription, chkIsComplete;
            return (
                <div>
                    <Link to="/" ref="lnkBack">Go Back</Link>
                    <h2>{`Editing: ${todo.title}`}</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const title = txtTitle.value.trim();
                        const description = txtDescription.value.trim();
                        const priority = ddlPriority.value;
                        const isComplete = chkIsComplete.checked;

                        this.props.onSubmit({_id: this.props.routeParams.id,title, description, priority, isComplete});
                        browserHistory.push('/');
                    }}>
                        <input type="text" defaultValue={todo.title} ref={node => {txtTitle = node}} />
                        <textarea ref={node => txtDescription = node} defaultValue={todo.description}/>

                        <select ref={node => {
                            ddlPriority = node
                        }}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <input type="checkbox" checked={todo.isComplete} ref={node => {chkIsComplete = node}} />
                        <button type="submit">
                          Update
                        </button>
                        <button onClick={() => {
                            this.props.onDelete(this.props.routeParams.id);
                            browserHistory.push('/');
                        }}>
                            Delete
                        </button>
                    </form>
                </div>)
    }
}

TodoDetail = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDetail);

export default TodoDetail;
