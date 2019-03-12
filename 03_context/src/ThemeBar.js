import React from 'react'
import ThemeContext from './theme-context'

const ThemeBar = () => {
    return (
        //在使用context的地方，使用Context.Consumer标签，然后会得到一个函数表达式，入参就是从Context.Provider中传入的值
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        <div
                        className="alert mt-5"
                        style={{backgroundColor: theme.bgColor, color: theme.color}}
                        >
                        样式区域
                            <button className={theme.classnames}>样式按钮</button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemeBar;