import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {getProducts, getProductsByCategory} from "../../actions/productActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "./Product";
import classnames from "classnames";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagination: {
                totalElements: 0,
                totalPages: 0,
                itemsCountPerPage: 10
            },
            activePage: 1,
            category: "All",
            products: this.props.products
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        this.props.getProducts(this.state.activePage, 10);
        this.setState({pagination: {
                totalPages: this.props.pagination.totalPages,
                totalElements: this.props.pagination.totalElements,
                itemsCountPerPage: this.props.pagination.itemsCountPerPage
        }});
    }

    handlePageChange = pageNumber => {
        this.setState({ activePage: pageNumber });
        this.props.getProducts(pageNumber, 10);
    };

    handleCategoryChange = category => {
       this.setState({category: category});
    };

    // TODO change renderPagination() and renderProducts() to methods sending new HTTP requests to the catalog API
    renderPagination() {
        let numberOfProducts;
        if (this.state.category === "All") {
            numberOfProducts = this.state.pagination.totalElements;
        } else {
            numberOfProducts = this.state.products.filter(product =>
                product.category.includes(this.state.category)).length;
        }
        console.log(numberOfProducts);

        if (numberOfProducts > this.state.pagination.itemsCountPerPage) {
            return(
                <Pagination activePage = {this.state.activePage}
                            itemsCountPerPage={this.state.pagination.itemsCountPerPage}
                            totalItemsCount={this.state.pagination.totalElements}
                            pageRangeDisplayed={5}
                            itemClass="page-item"
                            linkClass="page-link"
                            onChange={this.handlePageChange.bind(this)} />
            );
        }
    }

    renderProductList() {
        if (this.state.category === "All") {
            if (this.state.products.length === 0) {
                return(
                    <div className="alert alert-warning text-center">
                        Oops, no products complying with the given criteria have been found...
                    </div>)
            } else {
                return(
                    <div className="row">
                        {this.state.products.map(product => (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <Product key={product.id} product={product} />
                            </div>
                        ))}
                    </div>
                );
            }
        } else {
            const categorizedProducts = this.state.products.filter(product =>
                product.category.includes(this.state.category));

            if (categorizedProducts.length === 0) {
                return(
                    <div className="alert alert-warning text-center">
                        Oops, no products complying with the given criteria have been found...
                    </div>)
            } else {
                return(
                    <div className="row">
                        {this.state.products.filter(product =>
                        product.category.includes(this.state.category)).map(product => (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <Product key={product.id} product={product} />
                            </div>
                        ))}
                    </div>
                );
            }
        }
    }

    render() {
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
                                        {this.state.category}
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
                                    <i className="fa fa-list"/> Categories
                                </div>
                                <div className="list-group">
                                    <Link to="#"
                                          onClick={() => this.handleCategoryChange("All")}
                                          className={classnames("list-group-item", {
                                              "active": this.state.category === "All"
                                          })}>All</Link>
                                    <Link to="#"
                                          onClick={() => this.handleCategoryChange("Laptops")}
                                          className={classnames("list-group-item", {
                                              "active": this.state.category === "Laptops"
                                          })}>Laptops</Link>
                                    <Link to="#"
                                          onClick={() => this.handleCategoryChange("Cellphones")}
                                          className={classnames("list-group-item", {
                                              "active": this.state.category === "Cellphones"
                                          })}>Cellphones</Link>
                                    <Link to="#"
                                          onClick={() => this.handleCategoryChange("Tablets")}
                                          className={classnames("list-group-item", {
                                              "active": this.state.category === "Tablets"
                                          })}>Tablets</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-9">
                            {this.renderProductList()}
                            {this.renderPagination()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.object.isRequired,
    pagination: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
    getProductsByCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    products: state.products.products,
    pagination: {
        totalElements: state.products.pagination.totalElements,
        totalPages: state.products.pagination.totalPages,
        itemsCountPerPage: state.products.pagination.itemsCountPerPage
    }
});

export default connect(
    mapStateToProps,
    { getProducts, getProductsByCategory }
)(Products);