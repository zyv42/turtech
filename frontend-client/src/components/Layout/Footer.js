import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3">
                            <h5>ABOUT</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <p className="mb-0">Just another SMOKIN' SICK STYLISH store of
                                Electronics.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                            <h5>INFORMATION</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <ul className="list-unstyled">
                                <li><Link to="/myAccount">Your Account</Link></li>
                                <li><Link to="/about#terms">Terms &#38; Conditions</Link></li>
                                <li><Link to="/about#privacy">Privacy Policy</Link></li>
                                <li><Link to="/faq">Frequently Ask Questions</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                            <h5>STORE HOURS</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <ul className="list-unstyled">
                                <li>Monday - Saturday:</li>
                                <li>9:00 - 23:00</li>
                                <li>Sunday:</li>
                                <li>10:00 - 22:00</li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <h5>CONTACT</h5>
                            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                            <ul className="list-unstyled">
                                <li><i className="fa fa-home mr-2 fa-fw" />Kiev, Ukraine</li>
                                <li><i className="fa fa-envelope mr-2 fa-fw" />turtech@example.com</li>
                                <li><i className="fa fa-phone mr-2 fa-fw" />+ 038 999 999 98</li>
                                <li><i className="fa fa-print mr-2 fa-fw" />+ 038 999 999 99</li>
                            </ul>
                        </div>
                    </div>
                    {
                        // Copyright
                    }
                    <div className="footer-copyright text-center py-3">© 2019
                        Copyright: TurTech
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;