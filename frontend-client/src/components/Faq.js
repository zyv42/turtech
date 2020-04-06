import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";

class Faq extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">FAQ</h1>
                        <p className="lead text-muted mb-0">Frequently Asked Questions</p>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/welcome">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"
                                        aria-current="page">FAQ</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                {
                    // Shopping questions
                }
                <div className="container">
                    <h3>Shopping</h3>
                    <hr/>
                    <Accordion className="mb-4"
                               defaultActiveKey="0">
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="0">
                                    <h5 className="mb-0">Q: How do I place an order?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    A: First you need to set up an account,
                                    once that is created you are ready to place an order.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="1">
                                    <h5 className="mb-0">Q: How do I set up an account?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    A: Click on the login button in the
                                    upper right hand corner of the main page and then click on create
                                    an account.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="2">
                                    <h5 className="mb-0">Q: How long does it take to process and ship orders?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    A: Please allow 1 - 3 business days
                                    (Monday-Friday) for order processing regardless of the shipping
                                    method chosen. Once shipped you should receive your order within 2
                                    - 10 business days. Please note that 2 day and Overnight services
                                    refer to business days (Monday - Friday).
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="3">
                                    <h5 className="mb-0">Q: Are all of the items guaranteed in stock?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    A: We try to update the website as
                                    often as possible to reflect out of stock conditions. However, the
                                    ability to order an item does not guarantee that it will be in
                                    stock when your order is processed. You will be notified if an
                                    order is not available.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="4">
                                    <h5 className="mb-0">Q: How can I cancel or change my order?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    A: You can cancel your order or make a
                                    change to it by contacting us at 1.999.999.9999 as soon as
                                    possible after your order is placed with your name, order number,
                                    and a request for cancellation or a description of the requested
                                    change. Our office hours are Monday Friday 8am 4:30pm. We will do
                                    our best to cancel or modify your order, but we will not be able
                                    to complete the cancellation if your order has been processed or
                                    shipped.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    {
                        // Shipping question
                    }
                    <h3>Shipping</h3>
                    <hr/>
                    <Accordion defaultActiveKey="0"
                               className="mb-5">
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="0">
                                    <h5 className="mb-0">Q: How much is the shipping charge on orders?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    A: The shipping charge depends on the
                                    total amount of the merchandise ordered as well as the shipping
                                    method chosen. There are some items that incur additional charges
                                    such as diploma frames $19.99 for an oversized box and maple syrup
                                    $1.00 for double-boxing. The rate for chairs and rockers is $35.00
                                    for shipments east of the Mississippi and $45.00 west of the
                                    Mississippi.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="1">
                                    <h5 className="mb-0">Q. What is your shipping method?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    A: We ship NovaPoshta or UkrPoshta.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="p-2">
                                <Accordion.Toggle as={Button}
                                                  variant="link"
                                                  eventKey="2">
                                    <h5 className="mb-0">Q: When will I receive my order?</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    A: On average, your order will be
                                    received in 7 - 10 working days. During August and January,
                                    delivery time may take longer.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default Faq;