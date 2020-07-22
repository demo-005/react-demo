import React, { Component } from 'react';

class LoginButton extends Component {
    constructor(props) {
        super(props)
        // console.log(props.item)
    }
    render() {
        return (
            <button onClick={() => { this.props.item("taowuhua02") }}>
                LoginButton
            </button>
        );
    }
}

export default LoginButton;