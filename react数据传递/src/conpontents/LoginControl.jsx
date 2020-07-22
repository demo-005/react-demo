import React, { Component } from 'react';
import  LogoutButton  from "./LogoutButton"
import  LoginButton  from "./LoginButton"
import  Greeting  from "./Greeting"
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick=()=> {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () =>  {
        this.setState({ isLoggedIn: false });
    }
    handleOne=(msg)=> {
        this.setState({ ...this.status, "value": msg });
        console.log(this.state)
    }

    handleTwo = (msg) =>  {
        this.setState({ ...this.status, "value": msg });
        console.log(this.state)
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            //传递方法给子组件，子组件调用此方法修改父组件的数据
            button = <LogoutButton onClick={this.handleLogoutClick} item={this.handleOne}/>;
        } else {
             //传递方法给子组件，子组件调用此方法修改父组件的数据
            button = <LoginButton onClick={this.handleLoginClick} item={this.handleTwo}/>;
        }

        return (
            //传递数据给子组件，子组件通过props获取数据
            <div>
                {button}
                <Greeting isLoggedIn={isLoggedIn} value={'aaa'} index={'bbb'}></Greeting>
            </div>
        );
    }
}
export default LoginControl