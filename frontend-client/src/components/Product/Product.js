import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className="card h-100">
                <!-- 600x400 image th:src="#{adminPath}+@{~/images/product/}+${product.id}+'.png'"-->
                <img className="card-img-top"
                     src="https://dummyimage.com/600x400/55595c/fff" alt="" />
                <div className="card-body">
                    <a th:href="@{/productDetails?id=}+${product.id}"
                       title="View Product">
                        <h4 className="card-title"
                            th:text="${product.name}" />
                    </a>
                    <p className="card-text"
                       th:utext="${#strings.abbreviate(product.specifications, 1000)}" />
                </div>
                <div className="card-footer">
                    <div className="col align-bottom">
                        <h5>
                            <span style="font-size: x-large; color: #db3208;"
                                  th:text="${'$' + #numbers.formatDecimal(product.ourPrice, 0 , 'COMMA', 2, 'POINT')}" />
                            <span style="text-decoration: line-through;"
                                  th:text="'$' + ${#numbers.formatDecimal(product.listPrice, 0 , 'COMMA', 2, 'POINT')}" />
                        </h5>
                    </div>
                    <div className="col align-bottom">
                        <button className="btn btn-success btn-block add-to-cart"
                                th:id=${product.id}>
                            <span className="fa fa-shopping-cart" /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;