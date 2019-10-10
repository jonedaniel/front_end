import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './status-promote'
import Ss from "./ss";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.setState({
            date: new Date()
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>It is {this.state.date.toLocaleString()}</div>
        )
    }

}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: 'ON'
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            switch: this.state.switch === 'ON' ? 'OFF' : 'ON'
        })
    };

    render() {

        return (
            <a href='http://baidu.com' onClick={this.handleClick}>
                {this.state.switch}
            </a>
        )
    }
}

function UserGreeting(props) {
    return (
        <h3>Welcome to here!</h3>
    )
}

function GuestGreeting(props) {
    return (
        <h3>please sign up first!</h3>
    )
}

function Greeting(props) {
    if (props.isLogin) {
        return <UserGreeting/>;
    } else {
        return <GuestGreeting/>;
    }
}

function App(props) {
    return (
        <div>
            <Greeting isLogin={true}/>
            <Button/>
            <Clock/>
        </div>
    )
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 ?
                (<h2>
                    You have {unreadMessages.length} unread messages.
                </h2>) : (
                    <h3>big mistake!</h3>
                )
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    handleChange = (event) => {
        console.log(event.target);
        this.setState({value: event.target.value})
    };

    handleSubmit = (event) => {
        alert('提交的名字： ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class EasyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areaVal: '请输入',
            inputVal: '请输入',
            lastInput: []
        }
    }

    handleChange = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };
    handleSubmit = e => {
        const lastInput = this.state.lastInput.slice();
        if (lastInput.findIndex(x => x === this.state.inputVal) === -1) {
            lastInput.push(this.state.inputVal);
        }
        if (lastInput.findIndex(x => x === this.state.areaVal) === -1) {
            lastInput.push(this.state.areaVal);
        }
        this.setState({
            lastInput: lastInput
        });
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        文章:
                        <textarea name="areaVal" value={this.state.areaVal} onChange={this.handleChange}/>
                    </label>
                    <label>
                        姓名：
                        <input name="inputVal" value={this.state.inputVal} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
                <br/>
                {
                    this.state.lastInput.map(inputStr =>
                        <div key={inputStr}>
                            <span>{inputStr}</span>
                        </div>
                    )
                }
            </div>
        )
    }
}
ReactDOM.render(<Ss/>, document.getElementById('root'));
