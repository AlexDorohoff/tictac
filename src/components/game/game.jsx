import React, {Component} from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                hits: this.props,
            };
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        console.log('props ', this.props.match);
        return (
            <>
                <div className={'login'}>
                    <div className={'owner'}>{this.props.match.params.owner}<span className={'zero'}>&#9675;</span></div>
                    <div className={'opponent'}><span className={'tac'}>&#10006;</span>{this.props.match.params.opponent}</div>
                </div>
                <div className={'play_board'}>
                    <div className={'grid'}>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                    </div>
                </div>
            </>
        );
    }

}

export default Game;
