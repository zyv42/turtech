import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import {Modal, Button, Dropdown} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NavLink from "react-bootstrap/NavLink";

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: props.visible
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onButtonClick() {
        // Since the modal is inside the button click events will propagate up.
        if (!this.state.isOpened) {
            this.setState({
                isOpened: true
            });
        }
    }

    onClose(event) {
        if (event) {
            event.stopPropagation();
        }
        this.setState({
            isOpened: false
        });

        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    }

    onConfirm(event) {
        event.stopPropagation();
        this.setState({
            isOpened: false
        });
        this.props.onConfirm();
    }

    render() {
        return (
                <Dropdown.Item>
                    <Link onClick={this.onButtonClick}>
                        <i className="fa fa-sign-out fa-fw"/> Sign out
                        <Modal size="lg"
                               show={this.state.isOpened}
                               onHide={this.onClose}
                               centered>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Ready to leave?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Select "Sign out" below if you are ready to end your current session.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.onClose}
                                        variant="secondary">Cancel</Button>
                                <Button onClick={this.onConfirm}
                                        variant="primary">
                                    Sign out
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Link>
                </Dropdown.Item>
        )
    }
}

Logout.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func
};

export default Logout;