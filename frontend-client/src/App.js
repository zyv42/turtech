import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Layout/Header";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header />
                        {
                            // Public Routes
                        }

                        {
                            // Private Routes
                        }

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;