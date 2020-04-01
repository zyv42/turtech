import React from 'react';
import {Link} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";

function Logout() {

    return (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>
                    Ready to leave?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Select "Logout" below if you are ready to end your current session.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Link to="/logout"
                      onClick={this.logout.bind(this)}>
                    <Button variant="primary">Logout</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

export default Logout;