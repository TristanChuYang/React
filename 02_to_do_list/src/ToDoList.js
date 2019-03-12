import React, { Component } from 'react';

//定义一个组件
class ToDoList extends Component {

        constructor(props) {
            super(props);
            this.state = {
                list : [
                    'learn react',
                    'learn react native',
                    'learn vue'
                ]
            }

        }

        handleOnClick() {

            //要使用react提供的setState方法才可以生效
            //this.state.list.push('Hello World');
            this.setState({
                list : [...this.state.list, 'Hello World']
            })
        }

        //组件中必须有一个函数render，用于组建要显示的内容
        render() {
          //JSX语法，不需要加双引号或单引号
          //JS的表达式，使用{}
            return (
              <div className="ToDoList">
                  <input/>
                  <button onClick={this.handleOnClick.bind(this)}>add</button>
                  <ul>
                      {this.state.list.map((item, index) => {
                          return <li key={index}>{item}</li>
                      })}
                  </ul>
              </div>
            );
        }
}

//把组件导出来，导出来之后，才可以在index.js中导入
export default ToDoList;
