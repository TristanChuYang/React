import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './theme-context'
import ThemeBar from './ThemeBar'

const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }

    this.changeTheme = this.changeTheme.bind(this);

  }

  changeTheme(theme) {
    this.setState({theme})
  }

  render() {
    return (
        //把使用context的数据使用Context.Provider包裹，然后value传入值
        <ThemeContext.Provider value={themes[this.state.theme]}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a href="#theme-switcher"
                  className="btn btn-light"
                  onClick={() => {this.changeTheme('light').bind(this)}}>
                浅色主题
              </a>
              <a href="#theme-switcher"
                 className="btn btn-secondary"
                 onClick={() => {this.changeTheme('dark')}}>
                深色主题
              </a>
            </header>
            <ThemeBar/>
          </div>
        </ThemeContext.Provider>
    );
  }
}

export default App;
