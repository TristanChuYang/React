import React, { Component } from 'react';

class ToDoItem extends Component {

    render() {

        return (
            <div>
                {this.props.content}
            </div>
        );
    }


}

export default ToDoItem;

