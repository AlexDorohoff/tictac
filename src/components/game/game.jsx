import React, {Component} from 'react';

class Game extends Component {



    render() {
        console.log('game');
        return (
            <>
                <div>game</div>
                <div className="grid">
                    <div className="col-sm-4 panel">1</div>
                    <div className="col-sm-4 panel">2</div>
                    <div className="col-sm-4 panel">3</div>
                    <div className="col-sm-4 panel">4</div>
                    <div className="col-sm-4 panel">5</div>
                    <div className="col-sm-4 panel">6</div>
                    <div className="col-sm-4 panel">7</div>
                    <div className="col-sm-4 panel">8</div>
                    <div className="col-sm-4 panel">9</div>
                </div>
            </>
        );
    }
}

export default Game;
