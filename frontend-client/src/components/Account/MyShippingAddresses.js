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
        // TODO Consider removing parameter of userId from the method on frontend side and move it to backend only
        this.props.getUserShippingAddresses(this.props.security.userInfo.sub);
    }

    //TODO reimplement setting default user shipping address
    onSubmit(e) {
        e.preventDefault();
        this.props.setDefaultUserShippingAddress(this.props.security.userInfo.sub, this.state.userShippingAddresses.id);
    }

    onDeleteClick(userShippingId) {
        this.props.removeUserShippingAddress(this.props.security.userInfo.sub, userShippingId);
    }

    ListShippingAddresses = () => {
        const { userShippingAddresses } = this.props;

        if (userShippingAddresses.length > 0) {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
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
                                               value={userShippingAddress.id}
                                               checked={userShippingAddress.defaultShippingAddress}/>
                                    </td>
                                    <td>{userShippingAddress.shippingAddressStreet1},&nbsp;
                                        {userShippingAddress.shippingAddressCity}</td>
                                    <td>
                                        {
                                            // Buttons to implement "updateUserShipping" and "removeUserShipping" methods
                                        }
                                        <Link className="btn btn-primary"
                                              to={`/myAccount/updateShippingAddress/${userShippingAddress.id}`}>
                                            <i className="fa fa-pencil" />
                                        </Link>
                                        &nbsp;&nbsp;
                                        <Button className="fa fa-times"
                                                onClick={this.onDeleteClick.bind(this, userShippingAddress.id)}/>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="btn btn-primary"
                                type="submit">Save</button>
                    </form>
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
                                    <Link to="/myAccount">
                                        List of Shipping Addresses</Link></li>
                                <li className="breadcrumb-item">
                                    <Link to="/myAccount/addNewShippingAddress">
                                        Add Shipping Address</Link></li>
                            </ol>
                            <hr/>
                        </div>
                    </div>
                    {
                        //TODO change this.renderUserShippingAddressesDisplay() to a component
                    }
                    <Switch>
                        <Route exact path="/myAccount"
                                      component={this.ListShippingAddresses} />
                        <Route exact path="/myAccount/addNewShippingAddress"
                                      component={AddNewShippingAddress} />
                        <Route exact path="/myAccount/updateShippingAddress/:userShippingAddressId"
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