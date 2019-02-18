import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GameItem from './gameItem.jsx';
import Login from "./login.jsx";


class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: '',
            login : '',
        }
        this.boardContent = '';
        this.onClickNewGame = this.onClickNewGame.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData(value){
        this.setState({ login: value });
        console.log("login in board ", value);
    }

    onClickNewGame(e) {
        console.log('this is:', this);
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
            console.log(data, this.state)
        })
    };

    render() {
        if (this.state.jsonData !== '') {
            this.boardContent = (
                <>
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

        } else {
            this.boardContent = (<p> Do not have new games. Сreate new!
            </p>);
        }

        return (
            <>
                <Login  updateData={this.updateData}/>
                {this.boardContent}
                <div>
                    <button onClick={this.onClickNewGame}>New game!</button>
                </div>
            </>
        )
    }
}

export default GameBoard;
