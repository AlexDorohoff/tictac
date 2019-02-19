import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GameItem from '../gameItem/gameItem.jsx';
import Login from "../login/login.jsx";


class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: '',
            login: '',
            newLogin: '',
        };
        this.boardContent = '';
        this.onClickNewGame = this.onClickNewGame.bind(this);
        this.updateData = this.updateData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(response) {
        this.setState({newLogin: response});
        console.log(this.state.newLogin);
    }

    updateData(value) {
        this.setState({login: value});
    }

    onClickNewGame(handleSubmit) {
        console.log(this.state.login)
        console.log('this is:', this.state);
        fetch('/games/new', {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify({
                userName: this.state.login
            })
        })
            .then(function (response) {
                console.log('response', response.json());
                return response;
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    };


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
    }
    ;

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
                <Login updateData={this.updateData}/>
                {this.boardContent}
                <div>
                    <button onClick={this.onClickNewGame}>New game!</button>
                </div>
            </>
        )
    }
}

export default GameBoard;
