import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";

class Landing extends Component {
    render() {
        return (
            <div>
                {
                    // Carousel
                }
                <header>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block"
                                 src="http://placehold.it/1900x1080"
                                 alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide</h3>
                                <p>This is the description for the first slide</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block"
                                 src="http://placehold.it/1900x1080"
                                 alt="Second slide" />
                            <Carousel.Caption>
                                <h3>Second slide</h3>
                                <p>This is the description for the second slide</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block"
                                 src="http://placehold.it/1900x1080"
                                 alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide</h3>
                                <p>This is the description for the third slide</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </header>
                {
                    // Page Content
                }
                <div className = "container" >
                    <h2 className = "my-4" > Welcome to TurTech, where the wildest dreams come true! </h2>

                    {
                        // Feature Section
                    }
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>TurTech Features</h2>
                            <p>Our amazing store includes:</p>
                            <ul>
                                <li>
                                    <strong>TURTLES</strong>
                                </li>
                                <li>Some tech</li>
                                <li>The sleekest design possible</li>
                                <li>Security</li>
                                <li>Validation</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id
                                reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia
                                dolorum ducimus unde.</p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded" src="/public/images/logo_bigger.png" alt="Logo" />
                        </div>
                    </div>

                    <hr />
                    {
                        // Call to Action
                    }
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum
                                deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                        </div>
                        <div className="col-md-4">
                            <Link className="btn btn-lg btn-primary btn-block"
                                  to="/products">Give us your money now!</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;