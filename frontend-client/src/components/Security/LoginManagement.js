import React, {Component} from 'react';
import {Modal, Tabs, Tab} from "react-bootstrap";
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
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.props.history.goBack}>
                {
                    // User management
                }
                <Modal.Header closeButton>
                    <Modal.Title>
                        TurTech Login
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body closeButton>
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
                </Modal.Body>

            </Modal>
        );
    }
}

export default LoginManagement;