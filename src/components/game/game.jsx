import React, {Component} from 'react';
import Tile from '../tile/tile.jsx'
import {Link} from "react-router-dom";
import jsonData from "../../api.json";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                play: true,
                play_board_theme: {background: ''},
                login_theme: {background: ''},
                sprite_theme: {background: ''},
                btn_text: 'SURRENDER',
            };
    }

    componentDidMount() {
        if (this.props.match.params.opponent !== "undefined") {
            this.setState({play: false})
            this.setState({play_board_theme: {background: '#B6B6B4'}})
            this.setState({login_theme: {color: '#B6B6B4'}})
            this.setState({sprite_theme: {color: '#B6B6B4'}})
            this.setState({btn_text: 'BACK'})
        }
    }


    render() {
        console.log('props match: ', this.props.match);
        const tileList = [];
        for (var i = 0; i < 9; i++) {
            tileList.push(<Tile playng={this.state.play}/>)
        }

        const gameData =  jsonData[this.props.match.params.id];
        console.log('game data: ', gameData);
        if (gameData.owner == "undefined" || gameData.opponent == "undefined") {
            return (<div>Please back and put your name</div>)
        } else {
            return (
                <>
                    <div className={'login'}>
                        <div className={'owner'}>
                            <span className={'user_name'}
                                  style={this.state.login_theme}>{gameData.owner}</span>
                            <span className={'tic'} style={this.state.sprite_theme}>&#10005;</span>
                        </div>
                        <div className={'opponent'}>
                            <span className={'tac'} style={this.state.sprite_theme}>&#9675;</span>
                            <span className={'user_name'}
                                  style={this.state.login_theme}>{gameData.opponent}</span></div>
                    </div>
                    <div className="not_clickable">
                        <div className={'play_board'} style={this.state.play_board_theme}>
                            <div className={'grid'}>
                                {tileList}
                            </div>
                        </div>
                    </div>
                    <div className={'time_wrapper'}>
                        <div className={'time'}>
                        </div>
                    </div>
                    <div className={'btn_wrapper'}>
                        <div className={'btn btn-success'}>
                            <Link to={'/'}>
                                {this.state.btn_text}
                            </Link>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Game;
