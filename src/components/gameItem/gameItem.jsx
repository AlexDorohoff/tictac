import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class GameItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                item: this.props.item,
                color: {background: ''},

            };

    }

    componentDidMount() {
        if (this.props.item.status == 'done') {
            console.log('done');
            this.setState({
                color:
                    {
                        background: 'black'
                    }
            });
        }
    }

    render() {

        console.log(this.state);
        return (
            <div className="panel" style={this.state.color}>
                <p className="">{this.state.item.owner || ''}</p>
                <p className="">{this.state.item.opponent || ''}</p>
            </div>)
    }
}

export default GameItem;