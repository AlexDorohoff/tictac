import React, {Component} from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                hits: this.props,
                symb: {background: ''},
                isOpen: false,
            };
        this.onClickTile = this.onClickTile.bind(this);
    }

    onClickTile() {
        if (this.props.playing) {
            this.setState({isOpen: 'true'})
        }
    }

    render() {
        return (
            <div className="tile" style={this.state.symb} id={"1"} onClick={this.onClickTile}>
                {this.state.isOpen && (
                    <span className={'big_tic'}>&#10005;</span>
                )}</div>
        )
    }
}

export default Tile;
