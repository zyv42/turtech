import React, {Component} from 'react';
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import MyBilling from "./MyBilling";
import MyShipping from "./MyShipping";
import {Nav, Tab} from "react-bootstrap";

class MyAccount extends Component {
    render() {
        return (
            <div className="m-4">
                <Tab.Container className="mt-3 mb-3"
                               defaultActiveKey="myProfile">
                    <div className="row">
                        <div className="col-md-3">
                            <Nav className="flex-column"
                                 variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="myProfile">Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="myOrders">Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="myBilling">Billing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="myShipping">Shipping</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        {
                            // User profile information
                        }
                        <Tab.Content className="col-md-9">
                            <Tab.Pane eventKey="myProfile">
                                <MyProfile />
                            </Tab.Pane>

                            {
                                // Orders information
                            }
                            <Tab.Pane eventKey="myOrders">
                                <MyOrders />
                            </Tab.Pane>

                            {
                                // Billing information
                            }
                            <Tab.Pane eventKey="myBilling">
                                <MyBilling />
                            </Tab.Pane>

                            {
                                // Shipping information
                            }
                            <Tab.Pane eventKey="myShipping">
                                <MyShipping />
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        );
    }
}

export default MyAccount;