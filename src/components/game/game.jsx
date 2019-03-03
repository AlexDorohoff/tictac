import React, {Component} from 'react';
import Tile from '../tile/tile.jsx'
import {Link} from "react-router-dom";

/**import jsonData from "../../api.json";**/

class Game extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                jsonData: '',
                play: true,
                style: {
                    btn_text: 'SURRENDER',
                    opponentLogin: '',
                },
            }
        ;
        this.gameData = '';
        this.notPlayng = {
            play_board_theme: {background: '#B6B6B4'},
            login_theme: {color: '#B6B6B4'},
            sprite_theme: {color: '#B6B6B4'},
            btn_text: 'BACK'
        };
    }


    componentWillMount() {
        fetch("/games/list")
            .then(response => response.json())
            .then(data => ((this.setData(data)), this.control()))
            .catch((error) => {
                console.error(error);
            });
    }

    setData(data) {
        this.setState({jsonData: data}, () => {
            console.log(data, this.state)
        })
    }
    ;

    control() {
        console.log('game data in control', this.gameData, this.gameData.length);
        if (this.gameData.length !== 0) {
            if (this.gameData.owner !== undefined) {
                if (this.gameData.opponent !== undefined) {
                    this.setState({
                        play: false,
                        ownerLogin: this.gameData.owner,
                        opponentLogin: this.gameData.opponent,
                        style: this.notPlayng,
                    });
                } else {
                    this.setState({
                        ownerLogin: this.gameData.owner,
                        opponentLogin: this.props.match.params.owner,
                        play: true,
                    })
                }
            }
        } else {
            this.setState({
                ownerLogin: this.props.match.params.owner,
                play: true,
            })
        }
    }

    makeTileList() {
        const tileList = [];
        for (let i = 0; i < 9; i++) {
            tileList.push(<Tile playng={this.state.play}/>)
        }
        return tileList
    }

    render() {
        let tileList = this.makeTileList();
        const pageContent = <>
            <div className={'login'}>
                <div className={'owner'}>
                                <span className={'user_name'}
                                      style={this.state.style.login_theme}>{this.state.ownerLogin}</span>
                    <span className={'tic'} style={this.state.style.sprite_theme}>&#10005;</span>
                </div>
                <div className={'opponent'}>
                    <span className={'tac'} style={this.state.style.sprite_theme}>&#9675;</span>
                    <span className={'user_name'}
                          style={this.state.style.login_theme}>{this.state.opponentLogin || '   '}</span>
                </div>
            </div>
            <div className="not_clickable">
                <div className={'play_board'} style={this.state.style.play_board_theme}>
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
                        {this.state.style.btn_text}
                    </Link>
                </div>
            </div>
        </>;

        if (this.state.jsonData !== '') {
            this.gameData = this.state.jsonData[this.props.match.params.id];
        }
        console.log('game data', this.gameData);
        if (this.gameData === '') {
            console.log('owner login',this.state.ownerLogin);
            if (this.state.ownerLogin === "undefined") {
                console.log('1');
                return (<div>Please back and put your name</div>)
            } else {
                return (
                    console.log('2'),
                    <div>{pageContent}</div>
                );
            }
        } else {
            if (this.gameData.opponent === undefined) {
                if (this.state.opponentLogin === "undefined") {
                    return (<div>Please back and put your name</div>)
                } else {
                    return (
                        <div>{pageContent}</div>)
                }
            } else {
                return <div>{pageContent}</div>
            }
        }
    }
}

export default Game;


