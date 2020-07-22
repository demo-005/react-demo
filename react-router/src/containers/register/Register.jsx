import React, { Component } from 'react';
class Register extends Component {
    render() {
        let { params } = this.props.match
        console.log(params.id)
        return (
            <div>
                Register 
            </div>
        );
    }
}

export default Register;