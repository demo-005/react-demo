import React, { Component } from 'react';
class Greeting extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        const isLoggedIn =this.props.isLoggedIn;
        if (isLoggedIn) {
            return <div >{`isLoggedIn is ${isLoggedIn}`}</div>;
        }
        return <div >{`isLoggedIn is ${isLoggedIn}`}</div>;
    }
}

export default Greeting;