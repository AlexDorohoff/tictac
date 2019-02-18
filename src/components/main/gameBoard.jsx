import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GameItem from './gameItem.jsx';
import Login from "./login.jsx";


class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: {},
        }


    }


    render() {

        return (
            <>
                <div>
                    <Login/>
                </div>
                <div className="row">
                    {this.state.hits.map((hit) =>
                        <div className="col-sm-3">
                            <nav>
                                <Link to="/game">
                                    <GameItem hit={hit}/>
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
            </>
        );

    }
}

export default GameBoard;
