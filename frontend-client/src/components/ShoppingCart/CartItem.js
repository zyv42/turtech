import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";

class CartItem extends Component {
    //TODO consider if it should deal with cart items classes on frontend and then send it to checkout or send
    // updates to backend with every minusClick() and plusClick() and let backend deal with it entirely

    minusClick() {
        document.getElementById("qty").value--;
    }

    plusClick() {
        document.getElementById("qty").value++;
    }

    render() {
        const { cartItem } = this.props;

        let InStock;

        const inStockAlgorithm = (cartItem) => {
            if (cartItem.product.inStockNumber > 10) {
                return (
                    <p style="color: green;">In Stock</p>
                );
            } else if (cartItem.product.inStockNumber < 10 && cartItem.product.inStockNumber > 0) {
                return (
                    <p style="color: green;">
                        Only {cartItem.product.inStockNumber} In Stock
                    </p>
                );
            } else if (cartItem.product.inStockNumber === 0) {
                return (
                    <p style="color: darkred;">Product Unavailable</p>
                );
            }
        };

        InStock = inStockAlgorithm(cartItem);

        return (
            <tr>
                <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff"
                         alt="product thumbnail" />
                </td>
                <td>
                    //TODO change link to the proper one
                    <Link to="@{/productDetails?id=}+${cartItem.product.id}">
                        <h5>{cartItem.product.name}</h5>
                    </Link></td>
                <td>
                    { InStock }
                </td>
                <td>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button type="button"
                                    onClick={this.minusClick()}
                                    className="quantity-left-minus btn btn-danger btn-number"
                                    data-field="qty">
                                <i className="fa fa-minus" />
                            </button>
                        </div>
                        <input type="text"
                               className="form-control"
                               name="qty"
                               min="1"
                               max="100"
                               value={cartItem.qty} />
                        <div className="input-group-append">
                            <button type="button"
                                    onClick={this.plusClick()}
                                    className="quantity-right-plus btn btn-success btn-number"
                                    data-field="qty">
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                    </div>
                </td>
                <td className="text-right">
                    <h5 style="color: #db3208; font-size: large;">
                        $<span className={classnames({'text-strike': cartItem.product.inStockNumber===0})}>
                            {cartItem.product.ourPrice}</span>
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