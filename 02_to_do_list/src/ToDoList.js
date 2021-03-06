import React, { Component } from 'react';
//引入自定义组件
import ToDoItem from './ToDoItem';

//定义一个组件
class ToDoList extends Component {

        constructor(props) {
            super(props);
            this.state = {
                list : [
                    'learn react',
                    'learn react native',
                    'learn vue'
                ],
                //定义一个数据项，用于存储input输入
                inputValue : ''
            }

            //在构造器中进行绑定this，这样比在标签中绑定的效率高
            this.handleOnInputChange = this.handleOnInputChange.bind(this);
            this.handleOnClick = this.handleOnClick.bind(this);
            this.handleDelete = this.handleDelete.bind(this);

        }

        handleOnClick() {

            //要使用react提供的setState方法才可以生效
            //this.state.list.push('Hello World');
            this.setState({
                list : [...this.state.list, this.state.inputValue],
                inputValue : ''
            })
        }

        handleOnInputChange(e) {

            this.setState({
                inputValue : e.target.value

            })
        }

        handleDelete(index) {
              console.log(index)
              const list = [...this.state.list];
              list.splice(index,1);

              //在ES6中，建和值名字一样，可以使用下面的方式写
              this.setState({list})
        }

        //将返回数据部分抽象出来
        getToDoItems() {

            return (
                this.state.list.map((item, index) => {
                    //return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
                    //调用子组件，因为子组件持有相关的参数，则需要把方法给子组件传递过去，让子组件去调用
                    return (
                        <ToDoItem
                            key={index}
                            content={item}
                            index={index}
                            delete={this.handleDelete}  />
                    )
                })
            )

        }

        //组件中必须有一个函数render，用于组建要显示的内容
        render() {
          //JSX语法，不需要加双引号或单引号
          //JS的表达式，使用{}
            return (
              <div className="ToDoList">
                  <input value={this.state.inputValue} onChange={this.handleOnInputChange}/>
                  <button style={{'background' : 'red'}} onClick={this.handleOnClick}>add</button>
                  <ul>
                      {this.getToDoItems()}
                  </ul>
              </div>
            );
        }
}

//把组件导出来，导出来之后，才可以在index.js中导入
export default ToDoList;
