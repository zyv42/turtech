import React, {Component} from "react";
import { connect } from "react-redux";
import { getUserOrders } from "../../actions/userProfileActions";
import PropTypes from "prop-types";
import OrderDetails from "./OrderDetails";
import {Link} from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecuredRoute";

class MyOrders extends Component {

    componentDidMount() {
        this.props.getUserOrders();
    }

    renderUserOrders() {
        const {userOrders} = this.props;

        if (userOrders && userOrders.length === 0) {
            return (
                <div className="alert alert-info">No orders yet.</div>
            );
        } else {
            return (
                <div>
                    <table className="table table-sm table-inverse">
                        <thead>
                        <tr>
                            <th>Order Date</th>
                            <th>Order Number</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userOrders.map(userOrder => (
                            <tr>
                                <td><Link to={`/userOrders/${userOrder.id}`}>
                                    {new Date(userOrder.orderDate).toLocaleDateString()}</Link></td>
                                <td>{userOrder.id}</td>
                                <td>{userOrder.orderTotal}</td>
                                <td>{userOrder.orderStatus}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <SecuredRoute exact
                                  path={"/userOrders/:userOrderId"}
                                  component={OrderDetails} />
                </div>
            );
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Orders</h4>
                            <hr />
                        </div>
                    </div>

                    {this.renderUserOrders()}
                </div>
            </div>
        );
    }
}

MyOrders.propTypes = {
    userOrders: PropTypes.object.isRequired,
    getUserOrders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userOrders: state.userProfile.userOrders
});

export default connect(
    mapStateToProps,
    { getUserOrders }
)(MyOrders);