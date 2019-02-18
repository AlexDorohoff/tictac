import React, {Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return<nav>
            <Link to="/test">test</Link>
        </nav>;
    }
}