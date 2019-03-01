import React, {Component} from 'react';
import Header from '../header/header.jsx';
import URLRouter from "./router.jsx";

class Wrap extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={'main'}>
                    <div>
                        <URLRouter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrap;
