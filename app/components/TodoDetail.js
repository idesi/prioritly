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

const labelStyles = {
        width: '150px',
        textAlign: 'right',
        marginRight: '20px',
        display: 'inline-block'
}
const inputStyles = {marginRight: '10px', border: '2px solid #ff4081', borderRadius: '5px', width: '200px', height: '30px', boxSizing: 'border-box'};
const selectStyles = {marginRight: '10px', width: '100px', background: '#00bcd4', color: 'white', height: '30px'}

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
                <div style={{fontFamily: 'Roboto sans-serif'}}>
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
                        <label style={labelStyles}>Title:</label>
                        <input type="text" style={inputStyles} defaultValue={todo.title} ref={node => {txtTitle = node}} />
                        <br />
                        <label style={labelStyles}>Description:</label>
                        <textarea ref={node => txtDescription = node} defaultValue={todo.description} style={inputStyles}/>
                        <br />
                        <label style={labelStyles}>Priority:</label>
                        <select style={selectStyles} ref={node => {
                            ddlPriority = node
                        }}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <br />
                        <label style={labelStyles}>Is Complete:</label>
                        <input type="checkbox" checked={todo.isComplete} ref={node => {chkIsComplete = node}} />
                        <br />
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
