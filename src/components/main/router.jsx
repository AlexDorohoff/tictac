import Game from "../game/game.jsx";
import {Route, Switch} from 'react-router-dom';

import React, {Component} from 'react';
import GameBoard from "./gameBoard.jsx";

class URLRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={GameBoard} />
                <Route exact path="/game/:id?" component={Game} />
            </Switch>)
    }
}

export default URLRouter