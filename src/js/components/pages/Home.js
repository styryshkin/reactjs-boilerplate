import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <h1>Home page</h1>
                <Link className="Home__button" to="/about">About</Link>
            </div>
        );
    }
}

export default Home;
