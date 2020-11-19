import React, {Component} from 'react';
import { getUserShippingAddresses, removeUserShippingAddress, setDefaultUserShippingAddress} from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Route, Switch } from "react-router-dom";
import AddNewShippingAddress from "./AddShippingAddress";
import {Button} from "react-bootstrap";
import UpdateShippingAddress from "./UpdateShippingAddress";

class MyShippingAddresses extends Component {

    componentDidMount() {
        this.props.getUserShippingAddresses(this.props.security.userInfo.sub);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userShippingAddresses !== this.props.userShippingAddresses) {
        }
    }


    onRadioClick(userShippingAddressId) {
        this.props.setDefaultUserShippingAddress(this.props.security.userInfo.sub, userShippingAddressId);
    }

    onDeleteClick(userShippingAddressId) {
        this.props.removeUserShippingAddress(this.props.security.userInfo.sub, userShippingAddressId);
    }

    renderShippingAddresses = () => {
        const { userShippingAddresses } = this.props;

        if (userShippingAddresses.length > 0) {
            return (
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Default</th>
                            <th>Shipping Address</th>
                            <th>Operations</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userShippingAddresses.map(userShippingAddress => (
                            <tr>
                                <td>
                                    <input type="radio"
                                           name="defaultShippingAddressId"
                                           onClick={this.onRadioClick.bind(this, userShippingAddress.id)}
                                           value={userShippingAddress.id}
                                           checked={userShippingAddress.defaultShippingAddress}/>
                                </td>
                                <td>{userShippingAddress.shippingAddressStreet1},&nbsp;
                                    {userShippingAddress.shippingAddressCity}</td>
                                <td>
                                    <Link className="btn btn-primary"
                                          to={{pathname: "/user-cabinet/shipping/update-shipping-address",
                                          state: {params: {shippingAddressId: userShippingAddress.id}}}}>
                                        <i className="fa fa-pencil" />
                                    </Link>
                                    &nbsp;&nbsp;
                                    <Button className="btn btn-danger"
                                            onClick={this.onDeleteClick.bind(this, userShippingAddress.id)}>
                                        <i className="fa fa-times" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className="alert alert-info text-center">
                    No User Shipping Addresses were specified yet.
                </div>
            )
        }
    }

    render() {

        //const { userShippingAddresses } = this.props.userShippingAddresses;
        //console.log(userShippingAddresses);

        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Shipping</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">
                                    <Link to="/user-cabinet/shipping">
                                        List of Shipping Addresses</Link></li>
                                <li className="breadcrumb-item">
                                    <Link to="/user-cabinet/shipping/new-shipping-address">
                                        Add Shipping Address</Link></li>
                            </ol>
                            <hr/>
                        </div>
                    </div>
                    {
                        //TODO change this.renderUserShippingAddressesDisplay() to a component
                    }
                    <Switch>
                        <Route exact path="/user-cabinet/shipping"
                               component={this.renderShippingAddresses} />
                        <Route exact path="/user-cabinet/shipping/new-shipping-address"
                               component={AddNewShippingAddress} />
                        <Route exact path="/user-cabinet/shipping/update-shipping-address"
                               component={UpdateShippingAddress} />
                    </Switch>
                </div>
            </div>
        );
    }
}

MyShippingAddresses.propTypes = {
    userShippingAddresses: PropTypes.object.isRequired,
    getUserShippingAddresses: PropTypes.func.isRequired,
    removeUserShippingAddress: PropTypes.func.isRequired,
    setDefaultUserShippingAddress: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    userShippingAddresses: state.userProfile.userShippingAddresses
});

export default connect(
    mapStateToProps,
    { getUserShippingAddresses, removeUserShippingAddress, setDefaultUserShippingAddress }
)(MyShippingAddresses);