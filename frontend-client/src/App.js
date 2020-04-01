import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing";
import Footer from "./components/Layout/Footer";
import LoginManagement from "./components/Security/LoginManagement";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
                        <Switch>
                        {
                            // Public Routes
                        }
                        <Route exact
                               path = "/welcome"
                               component = {Landing} />
                        <Redirect from = "/"
                                  to = "/welcome" />
                        <Route exact
                               path = "/security/:tab"
                               component = {LoginManagement} />
                        </Switch>
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