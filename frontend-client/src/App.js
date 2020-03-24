import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing";
import Footer from "./components/Layout/Footer";
import Login from "./components/Security/Login";
import Register from "./components/Security/Register";
import LoginManagement from "./components/Security/LoginManagement";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
                        {
                            // Public Routes
                        }
                        <Route exact
                               path = "/"
                               component = {Landing} />
                        <Route exact
                               path = "/login"
                               component = {LoginManagement} />
                        <Route exact
                               path = "/register"
                               component = {LoginManagement} />

                        {
                            // Private Routes
                        }
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;