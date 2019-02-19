import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class GameItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                item: this.props.item
            };

    }

    render() {
        console.log(this.state);
        return (
            <div className="panel">
                <p className="">{this.state.item.ouner || ''}</p>
                <p className="">{this.state.item.opponent || ''}</p>
                <p>{this.state.item.status || ''}</p>
            </div>)
    }
}
export default GameItem;