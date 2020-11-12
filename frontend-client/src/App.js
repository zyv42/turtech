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
import MyAccount from "./components/Account/MyAccount";
import SecuredRoute from "./securityUtils/SecuredRoute";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout, refreshTokenAction} from "./actions/securityActions";
import jwt_decode from "jwt-decode";
import UpdatePaymentOption from "./components/Account/UpdatePaymentOption";
import UpdateShippingAddress from "./components/Account/UpdateShippingAddress";

const jwtToken = localStorage.jwtToken;
const refreshToken = localStorage.refreshToken;


if (jwtToken) {
    const current_user = {
        token: {},
        userInfo: []
    }
    current_user.token = jwtToken;
    current_user.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setJWTToken(jwtToken);
    const decodedToken = jwt_decode(jwtToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: current_user
    });

    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
        if (refreshToken) {
            refreshTokenAction(refreshToken);
        } else {
            store.dispatch(logout());
            window.location.replace("/");
        }
    }
}

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
                        <div className="container-fluid"
                             style={{minHeight: "600px"}}>
                        <Route exact
                               path={"/welcome"}
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
                               path={"/cart"}
                               component={ShoppingCart} />
                        {
                            // Private Routes
                        }
                        <SecuredRoute
                            path={"/myAccount"}
                            component={MyAccount} />
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;