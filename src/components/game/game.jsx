import React, {Component} from 'react';
import Tile from '../tile/tile.jsx'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                hits: this.props,
                symb: {background: ''},
                flag: '',
                isOpen: false,
            };
    }
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        console.log('props ', this.props.match);
        const tileList =[]
        for(var i=0; i<9; i++)
        {
            tileList.push(<Tile/>)
        }
        return (
            <>
                <div className={'login'}>
                    <div className={'owner'}>
                        <span className={'user_name'}>{this.props.match.params.owner}</span>
                        <span className={'tic'}>&#10005;</span>
                    </div>
                    <div className={'opponent'}>
                        <span className={'tac'}>&#9675;</span>
                        <span className={'user_name'}>{this.props.match.params.opponent}</span></div>
                </div>
                <div className={'play_board'}>
                    <div className={'grid'}>
                        {tileList}
                    </div>
                </div>
            </>
        );
    }

}

export default Game;
