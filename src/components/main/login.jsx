import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                login: '',
            };
        this.onLoginChange = this.onLoginChange.bind(this);
    }

    onLoginChange(e) {
        var val = e.target.value;
        this.setState({login: val});
        this.props.updateData(this.state.login);
    }

    render() {
        console.log(this.state);
        return (
            <div className='login'>
                <input onChange={this.onLoginChange} type="text">{this.state.name}</input>
            </div>
        );
    }
}

export default Login;
