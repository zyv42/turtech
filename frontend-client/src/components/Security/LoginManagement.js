import React, {Component} from 'react';
import {Modal, Tabs, Tab} from "react-bootstrap";
import Login from './Login';
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

class LoginManagement extends Component {
    render() {
        return (
            <Modal
//                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                {
                    // User management
                }
                <Modal.Body closeButton>
                    <Tabs defaultActiveKey="login"
                          id="user-management">
                        {
                            // Login tabpanel
                        }
                        <Tab evenKey="login"
                             title="Login">
                            <Login />
                        </Tab>
                        {
                            // Register tabpanel
                        }
                        <Tab eventKey="Register"
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