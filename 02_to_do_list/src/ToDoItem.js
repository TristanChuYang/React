import React, { Component } from 'react';

class ToDoItem extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    //子组件如果想和父组件通信，则要调用父组件传递过来的方法
    handleDelete() {
        console.log("handle delete=====" + this.props.index)
        this.props.delete(this.props.index)
    }

    render() {

        //ES6结构赋值
        const { content } = this.props;
        return (
            <div>
                <div onClick={this.handleDelete}>{content}</div>
            </div>
        );
    }


}

export default ToDoItem;

