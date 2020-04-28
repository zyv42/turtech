import React, {Component} from 'react';
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
    render() {
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
                                    <tr th:each="cartItem : ${cartItemList}">
                                        <td>
                                            <img src="https://dummyimage.com/50x50/55595c/fff"
                                                 alt="product thumbnail" />
                                        </td>
                                        <td>
                                            <a th:href="@{/productDetails?id=}+${cartItem.product.id}">
                                            <h5 th:text="${cartItem.product.name}" />
                                        </a></td>
                                        <td><p th:if="${cartItem.product.inStockNumber&gt;10}"
                                               style="color: green;">In Stock</p>
                                            <p th:if="${cartItem.product.inStockNumber&lt;10 and cartItem.product.inStockNumber&gt;0}"
                                                style="color: green;">
                                                Only <span th:text="${cartItem.product.inStockNumber}" />
                                                In Stock
                                            </p>
                                            <p th:if="${cartItem.product.inStockNumber==0}"
                                               style="color: darkred;">Product Unavailable</p></td>
                                        <td>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <button type="button"
                                                            th:id="m + ${cartItem.id}"
                                                            className="quantity-left-minus btn btn-danger btn-number"
                                                            data-field="qty">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input type="text"
                                                       className="form-control"
                                                       th:id="qty + ${cartItem.id}"
                                                       name="qty"
                                                       min="1"
                                                       max="100"
                                                       th:value="${cartItem.qty}" />
                                                    <div className="input-group-append">
                                                        <button type="button"
                                                                th:id="p + ${cartItem.id}"
                                                                className="quantity-right-plus btn btn-success btn-number"
                                                                data-field="qty">
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <h5 style="color: #db3208; font-size: large;">
                                                $<span th:text="${cartItem.product.ourPrice}"
                                                       th:style="${cartItem.product.inStockNumber}==0? 'text-decoration: line-through' : ''">
										</span>
                                            </h5>
                                        </td>
                                        <td className="text-right">
                                            <a className="btn btn-sm btn-danger"
                                               th:href="@{/shoppingCart/removeItem?id=}+${cartItem.id}">
                                                <i className="fa fa-trash" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        <td>Sub-Total (<span id="subNumber" th:text="${numberOfItems}" />
                                            items):
                                        </td>
                                        <td className="text-right">
                                            <span style="color: #db3208;">
                                            $<span id="subSum"
                                                   th:text="${shoppingCart.grandTotal}" />
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
                                    <a className="btn btn-block btn-light"
                                       th:href="@{/products}">
                                        Continue Shopping</a>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <a className="btn btn-lg btn-block btn-success text-uppercase"
                                       th:href="@{/checkout(id=${shoppingCart.id})}">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;