import React from 'react';

export default class TodoDetail extends React.Component {
    render(){
        return (
            <div>
                Details about {this.props.params.id}
            </div>
        )
    }
}
