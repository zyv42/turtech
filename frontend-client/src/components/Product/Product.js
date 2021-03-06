import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addToCart} from "../../actions/shoppingCartActions";

class Product extends Component {

    onAddToCartClick = id => {
        this.props.addToCart(id);
    };

    truncate = str => {
        return str.length > 100 ? str.substring(0, 50) + "..." : str;
    };

    render() {
        const { product } = this.props;
        return (
            <div className="card h-100">
                {
                    // TODO Path for proper images, undergoing changes
                   // 600x400 image th:src="#{adminPath}+@{~/images/product/}+${product.id}+'.png'"-->
                }
                <img className="card-img-top"
                     src="https://dummyimage.com/600x400/55595c/fff"
                     alt="product" />
                <div className="card-body">
                    <Link to={`/products/${product.id}`}
                          title="View Product">
                        <h4 className="card-title">{product.name}</h4>
                    </Link>
                    <p className="card-text">
                        <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                {this.truncate(product.specifications)}
                        </span>
                    </p>
                </div>
                <div className="card-footer">
                    <div className="col align-bottom">
                        <h5>
                            <span style={{fontSize: "x-large", color: "#db3208"}}>${product.ourPrice.toFixed(2)}</span>&nbsp;
                            <span style={{textDecoration: "line-through"}}>${product.listPrice.toFixed(2)}</span>
                        </h5>
                    </div>
                    <div className="col align-bottom">
                        <button className="btn btn-success btn-block"
                                onClick={this.onAddToCartClick.bind(this, product.id)}>
                            <span className="fa fa-shopping-cart" /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    addToCart: PropTypes.func.isRequired
};

export default connect(
    null,
    {addToCart}
)(Product);