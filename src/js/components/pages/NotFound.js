import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
    render () {
        return (
            <div className="NotFound">
                <h1>Page not found.</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default NotFound;
