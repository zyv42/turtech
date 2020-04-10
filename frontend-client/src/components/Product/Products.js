import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import { getProducts } from "../../actions/productActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "./Product";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            totalPages: null,
            itemsCountPerPAge: null,
            totalItemCount: null
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.props.getProducts(this.state.activePage);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.getProducts(pageNumber);
    }

    render() {
        const { products } = this.props.product.products;

        let ProductsContent;

        const contentAlgorithm = products => {
          if (products === null || products.length < 1) {
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
                      <div className="col-lg-4 col-md-6 mb-4">
                          {products.map(product => (
                              <Product key = {product.id} product = {product} />
                          ))}
                      </div>

                      {
                          // Pagination
                      }
                      <Pagination activePage = {this.state.activePage}
                                  itemsCountPerPage={this.state.itemsCountPerPage}
                                  totalItemsCount={this.state.totalItemsCount}
                                  pageRangeDisplayed={5}
                                  itemClass="page-item"
                                  linkClass="page-link"
                                  onChange={this.handlePageChange.bind(this)} />
                  </div>
              );
          }
        };

        ProductsContent = contentAlgorithm(products);

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
                            { ProductsContent }
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