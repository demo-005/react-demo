import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Button } from 'antd';
import 'antd/dist/antd.css';
class Main extends Component {
    handleClick =()=>{
        console.log("====")
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.handleClick()}>history方式跳转login界面</Button> 
                <div>
                    <Link to="/register/:id">Link方式跳转register</Link>
                </div>
            </div>
        );
    }
}

export default Main;