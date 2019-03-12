import React, { Component } from 'react';

class ToDoItem extends Component {

    //子组件如果想和父组件通信，则要调用父组件传递过来的方法
    handleDelete() {
        this.props.delete(this.props.index)
    }

    render() {

        return (
            <div>
                <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
            </div>
        );
    }


}

export default ToDoItem;

