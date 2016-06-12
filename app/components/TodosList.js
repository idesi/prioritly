import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import todos from '../../api/data';

export default class TodosList extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state.todos = [];
    }

     createTodoEls (todo) {
        return <li key={todo.id}><Link to={"todo/" + todo.id}>{todo.title}</Link></li>
    }

     loading(props) {
         return <div>Loading....</div>
     }

     componentDidMount(){
         window.setTimeout(function(){
             this.setState({todos});
         }.bind(this), 500);
     }

    render(){
        var todos = this.state.todos.length > 0 ? this.state.todos.map(this.createTodoEls) : this.loading();
        return (
            <div>
                {todos}
            </div>
        )
    }
}
