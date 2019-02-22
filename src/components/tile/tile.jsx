import React, {Component} from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                hits: this.props,
                symb: {background: ''},
                flag: '',
                isOpen: false,
            };
        this.onClickTile = this.onClickTile.bind(this);
    }

    onClickTile(e) {
        this.setState({
            symb: {background: 'white'}
        });
        this.setState({isOpen: 'true'})
        console.log(this.state.symb);
    }

    render() {
        console.log('props ', this.props.match);
        return (
            <div className="tile" style={this.state.symb} id={"1"} onClick={this.onClickTile}>
                {this.state.isOpen && (
                    <b>opened!</b>
                )}</div>
        )
    }
}

export default Tile;
