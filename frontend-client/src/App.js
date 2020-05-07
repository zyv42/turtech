import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing";
import Footer from "./components/Layout/Footer";
import LoginManagement from "./components/Security/LoginManagement";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Products from "./components/Product/Products";
import ProductDetails from "./components/Product/ProductDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

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
                               path="/welcome"
                               component={Landing} />
                        <Redirect from="/"
                                  to="/welcome" />
                        <Route exact
                               path={"/login"}
                               component = {LoginManagement} />
                        <Route exact
                               path={"/register"}
                               component = {LoginManagement} />
                        <Route exact
                               path={"/products"}
                               component = {Products} />
                        <Route exact
                               path={"/products/:productId"}
                               component = {ProductDetails} />
                        <Route exact
                               path={"/contact"}
                               component={Contact} />
                        <Route exact
                               path={"/faq"}
                               component={Faq} />
                        <Route exact
                               path={"/about"}
                               component={About} />
                        <Route exact
                               path={"/shoppingCart"}
                               component={ShoppingCart} />
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