import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { getShoppingCart } from "../../actions/shoppingCartActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import Product from "../Product/Product";

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {
        this.props.getShoppingCart();
    }

    render() {
        const { shoppingCart } = this.props.shoppingCart;
        const { errors } = this.state;

        return (
            <div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">SHOPPING CART</h1>
                    </div>
                </section>

                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
                            <!-- Products in cart -->
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col" />
                                        <th scope="col">Product</th>
                                        <th scope="col">Availability</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                        <th />
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {shoppingCart.cartItemList.map(cartItem => (
                                        <CartItem key = {cartItem.id} cartItem = {cartItem} />
                                    ))}
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        //TODO get number of items from each individual cartItem
                                        <td>Sub-Total ({cartItem.size} items):
                                        </td>
                                        <td className="text-right">
                                            <span style="color: #db3208;">
                                            ${shoppingCart.grandTotal}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        <td>Tax</td>
                                        <td className="text-right">
                                            <span style="color: #db3208;">
                                                $<span id="tax" th:text="${#numbers.formatDecimal(shoppingCart.grandTotal*0.06,0,2)}" />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        <td>
                                            <strong>Total (<span id="totalNumber"
                                                                 th:text="${numberOfItems}" /> items):
                                            </strong>
                                        </td>
                                        <td className="text-right">
                                            <strong>
                                                <span style="color: #db3208; font-size: large;">
                                                $<span id="totalSum"
                                                       th:with="total=${shoppingCart.grandTotal+shoppingCart.grandTotal*0.06}"
                                                       th:text="${#numbers.formatDecimal(total, 0, 2)}" />
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div th:if="${notEnoughStock}"
                                 className="alert alert-warning">
                                Oops, some of the products don't have enough stock. Please update
                                product quantity.
                            </div>
                            <div th:if="${emptyCart}"
                                 className="alert alert-warning">
                                Oops, your cart is empty. See if you can find what you like in the store
                                and add it to the cart.
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="row">
                                <div className="col-sm-12  col-md-6">
                                    <Link className="btn btn-block btn-light"
                                       to="/products">
                                        Continue Shopping</Link>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <Link className="btn btn-lg btn-block btn-success text-uppercase"
                                       to="/checkout(id=${shoppingCart.id})">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    shoppingCart: PropTypes.object.isRequired,
    getShoppingCart: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getShoppingCart }
)(ShoppingCart);