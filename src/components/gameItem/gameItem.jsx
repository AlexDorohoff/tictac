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
            this.setState({
                color:
                    {
                        background: '#858683'
                    }
            });
        }else if (this.props.item.status == 'ready')
        {
            this.setState({
                color:
                    {
                        background: '#B6B6B4'
                    }
            });
        }else if (this.props.item.status == 'playing')
        {
            this.setState({
                color:
                    {
                        background: '#DCDCDB'
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