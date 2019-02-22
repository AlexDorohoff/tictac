import React, {Component} from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                hits: this.props,
                symb: {background: ''},
                flag: '',
            };
        this.onClickTile = this.onClickTile.bind(this);
    }

    onClickTile(e) {
        this.setState({
            flag:true
        })
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        console.log('props ', this.props.match);
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
                        <div className="tile" style={this.state.symb} backgroundImage={this.state.flag === true ? 'logo.svg': 'logo2.svg'} id={"1"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"2"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"3"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"4"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"5"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"6"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"7"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"8"} onClick={this.onClickTile}></div>
                        <div className="tile" style={this.state.symb} id={"9"} onClick={this.onClickTile}></div>
                    </div>
                </div>
            </>
        );
    }

}

export default Game;
