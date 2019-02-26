import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class GameItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                item: this.props.item,
            };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        if (this.state.item.status == 'done') {
            this.setState(
                {
                    color: {background: '#DCDCDB'},
                    border: {'border-top': '1px solid #ADADAD'},
                });
            console.log("in done", this.state);
        } else if (this.state.item.status == "playing") {
            this.setState({
                background: '#B6B6B4',
                border: {'border-top': '1px solid #666666'},
            });
        } else if (this.state.item.status == 'ready') {
            this.setState({
                color:
                    {
                        background: '#8F8F8F'
                    }
            });
        }
    }


    render() {
        console.log(this.state);
        return (

            <div className={'panel'} style={this.state.color}>
                <div className={'item_login'}>
                    <p className={'item_owner'}>{this.state.item.owner || ''}</p>
                    <p className={'item_opponent'} style={this.state.border}>{this.state.item.opponent || ''}</p>
                </div>
                <p className={'timer'}>
                    {this.state.item.time}
                </p>
            </div>)
    }
}

export default GameItem;