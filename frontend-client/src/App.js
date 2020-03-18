import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing";

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
                        <Route exact
                               path = "/"
                               component = {Landing} />

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