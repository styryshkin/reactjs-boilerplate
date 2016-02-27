import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
    render () {
        return (
            <div className="About">
                <h1>About page.</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default About;
