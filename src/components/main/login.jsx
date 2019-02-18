import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                login: "Tommy Lee",
            };
    }
    render() {
        return (
            <div className='login'>
                <input type="text"></input>
            </div>
        );
    }
}

export default Login;
