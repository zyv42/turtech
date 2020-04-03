import React, {Component} from 'react';
import {Card, Tabs, Tab} from "react-bootstrap";
import Login from './Login';
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

class LoginManagement extends Component {

    render() {
        let tab;
        if (window.location.pathname.endsWith("/register")) {
            tab = "register";
        } else {
            tab = "login";
        }
        return (
            <div className="container-fluid m-4 d-flex justify-content-center">
            <Card className="col-md-6">
                {
                    // User management
                }
                <Card.Body>
                    <Tabs defaultActiveKey={tab}
                          id="user-management"
                            onSelect={(k) => window.history.replaceState("","","/" + (k))}>
                        {
                            // Login tabpanel
                        }
                        <Tab eventKey="login"
                             title="Login">
                            <Login />
                        </Tab>
                        {
                            // Register tabpanel
                        }
                        <Tab eventKey="register"
                             title="Register">
                            <Register />
                        </Tab>
                        {
                            // Forgot password tabpanel
                        }
                        <Tab eventKey="forgotPassword"
                             title="Forgot password?">
                            <ForgotPassword />
                        </Tab>
                    </Tabs>
                </Card.Body>

            </Card>
            </div>
        );
    }
}

export default LoginManagement;