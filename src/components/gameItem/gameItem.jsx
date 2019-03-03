import React, {Component} from 'react';

class GameItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                item: this.props.item,
            };
        this.makeWinnerColor = this.makeWinnerColor.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        switch (this.state.item.status) {
            case 'done': {
                this.makeWinnerColor();
                this.setState(
                    {
                        color: {background: '#DCDCDB'},
                    });
                break;
            }
            case 'playing': {
                this.setState({
                    color: {background: '#B6B6B4'},
                    opponentStyle: {'border-top': '1px solid #666666'},
                });
                break;
            }
            case 'ready': {
                this.setState({
                    color: {background: '#8F8F8F'}
                });
                break;
            }
        }
    }

    makeWinnerColor() {
        switch (this.state.item.winner) {
            case this.state.item.owner: {
                this.setState({
                    ownerStyle: {color: 'yellow'},
                    opponentStyle: {
                        color: '#B6B6B4',
                        'border-top': '1px solid #ADADAD'
                    },
                });
                break;
            }
            case this.state.item.opponent: {
                this.setState({
                    opponentStyle: {
                        color: 'yellow',
                        'border-top': '1px solid #ADADAD'
                    },
                    ownerStyle: {color: '#B6B6B4'}
                });
                break;
            }
        }
    }


    render() {
        return (

            <div className={'panel'} style={this.state.color}>
                <div className={'item_login'}>
                    <p className={'item_owner'} style={this.state.ownerStyle}>{this.state.item.owner || ''}</p>

                    <p className={'item_opponent'} style={this.state.opponentStyle}>{this.state.item.opponent || ''}</p>
                </div>
                <p className={'timer'}>
                    {this.state.item.time}
                </p>
            </div>)
    }
}

export default GameItem;