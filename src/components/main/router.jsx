import Game from "./game.jsx";
import {Route, Switch} from 'react-router-dom';

import React, {Component} from 'react';
import Test from "./test.jsx";
import GameBoard from "./gameBoard.jsx";

class URLRouter extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={GameBoard} />
                <Route exact path="/about" component={Test} />
                <Route exact path="/game" component={Game} />
            </Switch>)
    }
}

export default URLRouter