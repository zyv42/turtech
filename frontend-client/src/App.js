import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;