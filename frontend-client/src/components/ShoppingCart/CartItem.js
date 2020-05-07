import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CartItem extends Component {
    render() {
        const { cartItem } = this.props;
        return (
            <tr>
                <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff"
                         alt="product thumbnail" />
                </td>
                <td>
                    <Link to="@{/productDetails?id=}+${cartItem.product.id}">
                        <h5>{cartItem.product.name}</h5>
                    </Link></td>
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
                    <Link className="btn btn-sm btn-danger"
                       to={`/shoppingCart/removeItem?id=${cartItem.id}`}>
                        <i className="fa fa-trash" />
                    </Link>
                </td>
            </tr>
        );
    }
}

export default CartItem;