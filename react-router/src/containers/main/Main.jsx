import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (){
        console.log("====")
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <div onClick={this.handleClick}>Main</div> 
            </div>
        );
    }
}

export default Main;