import React, { Component } from 'react';

//定义一个组件
class App extends Component {
    //组件中必须有一个函数render，用于组建要显示的内容
  render() {
      //JSX语法，不需要加双引号或单引号
      //JS的表达式，使用{}
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello World. {1 + 2}
          </p>
        </header>
      </div>
    );
  }
}

//把组件导出来，导出来之后，才可以在index.js中导入
export default App;
