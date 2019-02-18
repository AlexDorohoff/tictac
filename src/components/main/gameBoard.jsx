import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GameItem from './gameItem.jsx';
import Login from "./login.jsx";


class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: '',
        }


    }

    componentWillMount() {
        fetch("/games/list")
            .then(response => response.json())
            .then(data => (this.setData(data)))
            .catch((error) => {
                console.error(error);
            })
    }

    setData(data) {
        this.setState({jsonData: data}, () => {
            console.log(data,this.state)
        })
    };

    render() {
        if (this.state.jsonData !== '') {
        return (
            <>
                <div>
                    <Login/>
                </div>
                <div className="row">
                    {this.state.jsonData.map((hit) =>
                        <div className="col-sm-3">
                            <nav>
                                <Link to="/game">
                                    <GameItem item={hit}/>
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
            </>
        );

    }else{
            return (<p>do not render</p>);
        }}
}

export default GameBoard;
