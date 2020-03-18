import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
            <header>
                <div id="carouselExampleIndicators"
                     className="carousel slide"
                     data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active" />
                        <li data-target="#carouselExampleIndicators"
                            data-slide-to="1" />
                        <li data-target="#carouselExampleIndicators"
                            data-slide-to="2" />
                    </ol>
                    <div className="carousel-inner"
                         role="listbox">
                        {
                            // Slide One
                        }
                        <div className="carousel-item active"
                             style="background-image: url('http://placehold.it/1900x1080')">
                            <div className="carousel-caption d-none d-md-block">
                                <h3>First Slide</h3>
                                <p>This is a description for the first slide.</p>
                            </div>
                        </div>
                        {
                            // Slide Two
                        }
                        <div className="carousel-item"
                             style="background-image: url('http://placehold.it/1900x1080')">
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Second Slide</h3>
                                <p>This is a description for the second slide.</p>
                            </div>
                        </div>
                        {
                            // Slide Three
                        }
                        <div className="carousel-item"
                             style="background-image: url('http://placehold.it/1900x1080')">
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Third Slide</h3>
                                <p>This is a description for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev"
                       href="#carouselExampleIndicators"
                       role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon"
                              aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next"
                       href="#carouselExampleIndicators"
                       role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon"
                              aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
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
                    <Link className="btn btn-lg btn-primary btn-block" to="/products">Give us your money now!</Link>
                </div>
            </div>
        </div>
            </div>
                );
    }
}

export default Landing;