import React, {Component} from 'react';
import Header from './header.jsx';
import GameBoard from "./gameBoard.jsx";
import Test from "./Test.jsx";
import Game from "./Game.jsx";
import Nav from "./nav.jsx";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import URLRouter from "./router.jsx";

class Wrap extends Component {
    render() {
        return (
            <>
                <div>
                   <Header/>
                </div>
                <div className={'main'}>
                    <div>
                        <URLRouter/>
                    </div>
                </div>
            </>
        );
    }
}

export default Wrap;
