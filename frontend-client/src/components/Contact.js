import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">CONTACT US</h1>
                        <p className="lead text-muted mb-0">Where and how to reach us.</p>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/welcome">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="title">Our Location on Map</h2>
                    <hr/>
                    <div className="contaner">
                        <div className="row">
                            <div className="col-12 col-sm-8">
                                <div className="embed-responsive embed-responsive-1by1">
                                    <iframe
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=30.52144378423691%2C50.45031435465748%2C30.52348762750626%2C50.4513271219105&amp;layer=mapnik&amp;marker=50.45082074099383%2C30.522465705871582"
                                        style={{border: '1 solid black'}}
                                        className="embed-responsive-item">
                                    </iframe>
                                </div>
                            </div>
                            <div className="container col-12 col-sm-4">
                                <div className="card bg-light mb-3">
                                    <div className="card-header bg-success text-white text-uppercase">
                                        <i className="fa fa-home" /> Address
                                    </div>
                                    <div className="card-body">
                                        <p>Somewhere at the Independence Square</p>
                                        <p>01001 Kyiv</p>
                                        <p>Ukraine</p>
                                        <p>Email : turtech@example.com</p>
                                        <p>Tel. +380 99 999 99 99</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header bg-success text-white">
                                        <i className="fa fa-clock-o" /> OPENING HOURS
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action list-group-item-success">
                                                Monday<span className="pull-right">9:00-23:00</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action list-group-item-success">
                                                Tuesday<span className="pull-right">9:00-23:00</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action list-group-item-success">
                                                Wednesday<span className="pull-right">9:00-23:00</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action list-group-item-success">
                                                Thursday<span className="pull-right">9:00-23:00</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action list-group-item-success">
                                                Friday<span className="pull-right">9:00-23:00</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action list-group-item-success">
                                                Saturday<span className="pull-right">9:00-23:00</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action list-group-item-warning">
                                                Sunday<span className="pull-right">10:00-22:00</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-4">
                        <h2 className="title" id="messageUs">Or just drop us a message</h2>
                        {/*

                            <div className="alert alert-info"
                                 th:if="${messageSent}">
                                Message has been sent.
                            </div>*/
                        }
                        <hr/>
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <i className="fa fa-envelope" /> CONTACT US
                            </div>
                            <div className="card-body">
                                {
                                    // TODO action for the message form
                                }
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                               name="name"
                                               className="form-control"
                                               id="name"
                                               aria-describedby="emailHelp"
                                               placeholder="Enter name"
                                               required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email"
                                               name="email"
                                               className="form-control"
                                               id="email"
                                               aria-describedby="emailHelp"
                                               placeholder="Enter email"
                                               required="required" />
                                            <small id="emailHelp"
                                                   className="form-text text-muted">
                                                We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control"
                                                  id="message"
                                                  name="message"
                                                  rows="6"
                                                  required="required"/>
                                    </div>
                                    <div className="mx-auto">
                                        <button type="submit" className="btn btn-primary text-right">Send message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;