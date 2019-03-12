//入口
//引入react
import React from 'react';
//可以把组建挂载到DOM上
import ReactDOM from 'react-dom';

//引入组建App，以大写字母开头都是组建
import App from './ToDoList';

//把App的组建渲染到页面的root标签中
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
