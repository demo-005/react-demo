import React, { Component } from 'react';

class LogoutButton extends Component {
    constructor(props) {
        super(props)
        // console.log(props.item)
    }
    render() {
        return (
            <button onClick={() => { this.props.item("taowuhua01")}}>
                LogoutButton
            </button>
        );
    }
}

export default LogoutButton;