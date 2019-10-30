import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext('dark');

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value='red'>
                <ToolButton theme={this.props.theme}/>
            </ThemeContext.Provider>
        )
    }
}

function ToolButton(props) {
    return (
        <ThemedButton theme={props.theme}/>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <>
                <font color={this.props.theme}>by props</font><br/>
                <font color={this.context}>by context</font>
            </>
        )
    }
}

ReactDOM.render(<App theme='grey'/>, document.getElementById('root'));
