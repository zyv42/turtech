import React, {Component} from 'react';
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import MyPaymentOptions from "./MyPaymentOptions";
import MyShippingAddresses from "./MyShippingAddresses";
import {Nav, Tab} from "react-bootstrap";
import {NavLink, Route, Switch} from "react-router-dom";

class MyAccount extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">USER CABINET</h1>
                    </div>
                </section>
            <div className="m-4">
                <Tab.Container className="mt-3 mb-3">
                    <div className="row">
                        <div className="col-md-3">
                            <Nav className="flex-column"
                                 variant="pills">
                                <Nav.Item>
                                    <NavLink
                                        exact to={"/user-cabinet"}
                                        className="nav-link">Profile</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        to={"/user-cabinet/orders"}
                                        className="nav-link">Orders</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        to={"/user-cabinet/billing"}
                                        className="nav-link">Billing</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        to={"/user-cabinet/shipping"}
                                        className="nav-link">Shipping</NavLink>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <Tab.Content className="col-md-9">
                            <Switch>
                                <Route exact path={"/user-cabinet"}
                                       component={MyProfile} />
                                <Route path={"/user-cabinet/orders"}
                                       component={MyOrders} />
                                <Route path={"/user-cabinet/billing"}
                                       component={MyPaymentOptions} />
                                <Route path={"/user-cabinet/shipping"}
                                       component={MyShippingAddresses} />
                            </Switch>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            </div>
        );
    }
}

export default MyAccount;