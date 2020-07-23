import React, { Component } from 'react';
class Register extends Component {
    render() {
        let { params } = this.props.match
        console.log(params.id)
        return (
            <div>
                i'm register activity 
            </div>
        );
    }
}

export default Register;