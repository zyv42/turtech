import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {getProducts} from "../../actions/productActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "./Product";
import classnames from "classnames";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagination: {
                activePage: 0,
                totalElements: 0,
                totalPages: 0,
                itemsCountPerPage: 10
            },
            category: "All"
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        this.props.getProducts(this.state.pagination.activePage, 10);
        this.setState({pagination: {
                totalPages: this.props.pagination.totalPages,
                totalElements: this.props.pagination.totalElements,
                itemsCountPerPage: this.props.pagination.itemsCountPerPage
        }});
    }

    handlePageChange = pageNumber => {
        this.setState({pagination: { activePage: pageNumber }});
        this.props.getProducts(pageNumber);
    };

    handleCategoryChange = category => {
       this.setState({category: category});
       //this.props.products = this.state.products.filter(product => product.category === category);
    };

    render() {
        const { products } = this.props;
        const { category } = this.state;

        let ProductsDisplay;
        let PaginationDisplay;

        const paginationAlgorithm = () => {
            if (this.state.pagination.totalPages > 1) {
                return(
                    <Pagination activePage = {this.state.pagination.activePage}
                                itemsCountPerPage={this.state.pagination.itemsCountPerPage}
                                totalItemsCount={this.state.pagination.totalElements}
                                pageRangeDisplayed={5}
                                itemClass="page-item"
                                linkClass="page-link"
                                onChange={this.handlePageChange.bind(this)} />
                );
            }
        };

        const contentAlgorithm = products => {
          if (this.state.pagination.totalElements < 1) {
              return(
                  <div className="alert alert-warning text-center">
                    Oops, no products complying with the given criteria have been found...
                  </div>
              );
          } else {
              return(
                  <div className="row">
                      {
                          // Product display
                      }
                      {products.map(product => (
                          <div className="col-lg-4 col-md-6 mb-4">
                            <Product key = {product.id} product = {product} />
                          </div>
                      ))}
                  </div>
              );
          }
        };

        ProductsDisplay = contentAlgorithm(products);
        PaginationDisplay = paginationAlgorithm();

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
                            {ProductsDisplay}
                            {PaginationDisplay}
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
    getProducts: PropTypes.func.isRequired
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
    { getProducts }
)(Products);