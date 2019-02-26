import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GameItem from '../gameItem/gameItem.jsx';
import Login from "../login/login.jsx";
import jsonData from "../../api.json";

/**const jsonData = [
    {id_game: 1, owner: 'Chack', opponent: 'Mark', status: 'playing', time: '00:00:35'},
    {id_game: 2, owner: 'Rachel', opponent: 'Ted', status: 'playing', time: '00:01:35'},
    {id_game: 3, owner: 'Marshal', status: 'ready'},
    {id_game: 4, owner: 'Chack', opponent: 'Mark', status: 'playing', time: '00:00:45'},
    {id_game: 5, owner: 'Rachel', status: 'ready'},
    {id_game: 6, owner: 'Marshal', opponent: 'lilly', status: 'done', time: '00:01:05'},
    {id_game: 6, owner: 'Kermit', opponent: 'Grover', status: 'done', time: '00:01:05'}
];**/

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'undefined',
            newLogin: '',
        };
        this.boardContent = '';
        /**this.onClickNewGame = this.onClickNewGame.bind(this);**/
        this.updateData = this.updateData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(response) {
        this.setState({newLogin: response});
        console.log(this.state.newLogin);
    }

    updateData(value) {
        console.log('value', value);
        this.setState({login: value});
    }

    /**  onClickNewGame(handleSubmit) {
        console.log(this.state.login)

        fetch('/games/new', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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

     /** componentDidMount() {
        fetch("/games/list")
            .then(response => response.json())
            .then(data => (this.setData(data)))
            .catch((error) => {
                console.error(error);
            })
    }


     setData(data)
     {
    this.setState({jsonData: data}, () => {
        console.log(data, this.state)
    })
}
     ;
     **/
    render() {
        console.log(jsonData);
        if (this.state.jsonData !== '') {
            this.boardContent = (
                <>
                    <div className="row">
                        {jsonData.map((hit) =>
                            <div className="col-sm-3">
                                <nav>
                                    <Link to={'/game/' + hit.id_game + '/' + this.state.login}>
                                        <GameItem item={hit}/>
                                    </Link>
                                </nav>
                            </div>
                        )}
                    </div>
                </>
            );

        } else {
            this.boardContent = (<p> Do not have new games. Сreate new!</p>);
        }
        return (
            <>
                <Login updateData={this.updateData}/>
                {this.boardContent}
                <Link to={'/game/' + 0 + '/' + this.state.login}>
                    <div className={'add btn-success'} onClick={this.onClickNewGame}>&#10010;</div>
                </Link>
            </>
        )
    }
}

export default GameBoard;
