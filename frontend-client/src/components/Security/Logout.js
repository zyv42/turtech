import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Modal, Button, Dropdown} from "react-bootstrap";
import {withRouter} from "react-router-dom";

function Logout(props) {
    const [ show,setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {logoutHandle} = props;

    return (
        <>
        <Dropdown.Item>
            <Link to="/logout"
                  onClick={handleShow}>
                <i className="fa fa-sign-out"/> Sign out</Link>
        </Dropdown.Item>
        <Modal size="lg"
               show={show}
               onHide={handleClose}
               centered>
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
                      onClick={logoutHandle}>
                    <Button variant="primary">Logout</Button>
                </Link>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default (withRouter(Logout));