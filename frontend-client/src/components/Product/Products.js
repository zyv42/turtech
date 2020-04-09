import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import { getProducts } from "../../actions/productActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "./Product";

class Products extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props.product.products;
        return (
            <div className="container">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">PRODUCTS</h1>
                        <p className="lead text-muted mb-0">Only the finest pieces of
                            technology, crafted in the hottest of dwarven forges!</p>
                    </div>
                </section>

                {
                    // Breadcrumbs
                }
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/welcome">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {/*
                                            <span th:if=${activeAll}>All</span>
                                            < span th:if=${activeLaptops}>Laptops</span>
                                            <span th:if=${activeCellphones}>Cellphones</span>
                                            <span th:if=${activeTablets}>Tablets</span>*/
                                        }
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-3">
                            <div className="card bg-light mb-3">
                                <div className="card-header bg-success text-white text-uppercase">
                                    <i className="fa fa-list" /> Categories
                                </div>
                                {/*
                                    <div className="list-group category_block">
                                        <a className="list-group-item"
                                           th:classappend="${activeAll} ? 'active'"
                                           th:href="@{/products(category='all')}">All</a>
                                        <a className="list-group-item"
                                           th:classappend="${activeLaptops} ? 'active'"
                                           th:href="@{/searchByCategory(category='Laptops')}">Laptops</a>
                                        <a className="list-group-item"
                                           th:classappend="${activeCellphones} ? 'active'"
                                           th:href="@{/searchByCategory(category='Cellphones')}">Cellphones</a>
                                        <a className="list-group-item"
                                           th:classappend="${activeTablets} ? 'active'"
                                           th:href="@{/searchByCategory(category='Tablets')}">Tablets</a>
                                    </div>*/
                                }
                            </div>
                        </div>
                        <div className="col">
                            {/*//TODO PRODUCTS NOT FOUND ERROR
                                <div th:if="${productPage.isEmpty()}"
                                     className="alert alert-warning">
                                    Oops, no products have been found according to the given
                                    criteria...
                                </div>*/
                            }

                            {
                                // Product display
                            }
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    {products.map(product => (
                                        <Product key = {product.id} product = {product} />
                                    ))}
                                </div>

                                {
                                    // Pagination
                                }
                                <Pagination />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

Products.propTypes = {
    product: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(
    mapStateToProps,
    { getProducts }
)(Products);