import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onLoginChange = this.onLoginChange.bind(this);
    }

    onLoginChange(e) {
        var val = e.target.value;
        this.props.updateLogin(val);
    }

    render() {
        console.log(this.state);
        return (
            <div className='login'>
                <input onChange={this.onLoginChange} type="text"></input>
            </div>
        );
    }
}

export default Login;
