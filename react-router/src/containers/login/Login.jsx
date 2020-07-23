import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import BossLogin from './BossLogin';
import EmployLogin from './EmployLogin';
import 'antd/dist/antd.css';
class Login extends Component {

    render() {
        let { path } = this.props.match;
        console.log(this.props.match.path)
        return (
            <div>
                <h2>登录</h2>
                <div><Link to={`${path}/EmployLogin`}>嵌套路由老板登录</Link></div> 
                <div><Link to={`${path}/BossLogin`}>嵌套路由员工登录</Link></div>

                <div>
                    <Route path="/login/EmployLogin" component={EmployLogin} ></Route>
                </div>
                <div>
                    <Route path={`${path}/BossLogin`} component={BossLogin}></Route>
                </div>
            </div>
        );
    }
}

export default Login;