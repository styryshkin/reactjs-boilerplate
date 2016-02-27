/**
 *
 * App.js
 *
 * This is the skeleton around the actual pages.
 */

import React, { Component } from 'react';

class App extends Component {
    render () {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
