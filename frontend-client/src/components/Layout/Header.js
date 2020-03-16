import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="@{/}"> <img
                        className="img-responsive" src="@{/images/logo_bigger.png}"
                        height="50" width="150" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="@{/}"
                                                    th:classappend="${activeHome}? 'active'">HOME</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                    href="@{/products}"
                                                    th:classappend="${activeProducts}? 'active'">PRODUCTS</a></li>
                            <li className="nav-item"><a className="nav-link" href="@{/contact}"
                                                    th:classappend="${activeContact}? 'active'">CONTACT</a></li>
                            <li className="nav-item"><a className="nav-link" href="@{/faq}"
                                                    th:classappend="${activeFaq}? 'active'">FAQ</a></li>
                            <li className="nav-item"><a className="nav-link" href="@{/about}"
                                                    th:classappend="${activeAbout}? 'active'">ABOUT</a></li>
                        </ul>

                        Navbar Search
                        <form className="form-inline ml-2 my-2" action="@{/searchProduct}"
                              method="post">
                            <div className="input-group input-group-sm">
                                <input type="text" name="keyword" className="form-control"
                                       aria-label="Search" aria-describedby="inputGroup-sizing-sm"
                                       placeholder="Search for...">
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-secondary btn-number">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                            </div>
                        </form>

                        <!-- Shopping cart -->
                        <a className="btn btn-success btn-sm ml-2"
                           href="@{/shoppingCart/cart}"> <i
                            className="fa fa-shopping-cart fa-fw"></i> Cart <span
                            className="badge badge-light"
                            th:if="${#httpServletRequest.getUserPrincipal()!=null}"></span>
                        </a>

                        <!-- User Account -->
                        <div className="btn-group open ml-2">
                            <a className="btn btn-primary btn-sm" th:href="@{/myAccount}"><i
                                className="fa fa-user-circle fa-fw"></i> Welcome, <span
                                th:if="${#httpServletRequest.getUserPrincipal()!=null}"
                                th:text="${#httpServletRequest.getRemoteUser()}"></span> <span
                                th:if="${#httpServletRequest.getUserPrincipal()==null}"
                                th:text="guest"></span></a> <a
                            className="btn btn-primary btn-sm dropdown-toggle"
                            data-toggle="dropdown" href="#"> </a>
                            <ul className="dropdown-menu">
                                <li th:if="${#httpServletRequest.getUserPrincipal()==null}"
                                    className="dropdown-item">
                                    <a th:href="@{/signIn}"><i className="fa fa-sign-in fa-fw"></i> Sign in</a>
                                </li>
                                <li th:if="${#httpServletRequest.getUserPrincipal()==null}"
                                    className="dropdown-divider"></li>
                                <li th:if="${#httpServletRequest.getUserPrincipal()==null}"
                                    className="dropdown-item">
                                    <a href="@{/signUp}"><i className="fa fa-user-plus fa-fw"></i> Create new user</a>
                                </li>
                                <li th:if="${#httpServletRequest.getUserPrincipal()!=null}"
                                    className="dropdown-item">
                                    <a href="@{/myAccount}"><i className="fa fa-address-card-o fa-fw"></i> My Account</a>
                                </li>
                                <li th:if="${#httpServletRequest.getUserPrincipal()!=null}"
                                    className="dropdown-divider"></li>
                                <li th:if="${#httpServletRequest.getUserPrincipal()!=null}"
                                    className="dropdown-item">
                                    <a href="@{/logout}"
                                       data-toggle="modal"
                                       data-target="#logout">
                                        <i className="fa fa-sign-out"></i> Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

    );
    }
}

export default Header;