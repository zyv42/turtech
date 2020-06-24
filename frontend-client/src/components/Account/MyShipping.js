import React, {Component} from 'react';
import { getUserShippingAddresses, addUserShippingAddress, updateUserShippingAddress, removeUserShippingAddress, setDefaultUserShippingAddress} from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AddNewShippingAddress from "./AddNewShippingAddress";
import {Button} from "react-bootstrap";

class MyShipping extends Component {

    componentDidMount() {
        // TODO Consider removing parameter of userId from the method on frontend side and move it to backend only
        this.props.getUserShippingAddresses();
    }

    //TODO reimplement setting default user shipping address
    onSubmit(e) {
        e.preventDefault();
        this.props.setDefaultUserShippingAddress(this.state.userShipping.id);
    }

    removeUserShipping(userShippingId) {
        this.props.removeUserShippingAddress(userShippingId);
    }

    render() {

        const { userShippingAddresses } = this.props.userShipping;

        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Shipping</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">
                                    <Link to="@{/listOfShippingAddresses}"
                                          style="color:grey">
                                        List of Shipping Addresses</Link></li>
                            </ol>
                            <hr/>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={this.onSubmit} >
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
                                                  checked={userShippingAddress.userShippingDefault} />
                                                  <span>default</span>
                                       </td>
                                        <td>{userShippingAddress.userShippingStreet1},
                                            {userShippingAddress.userShippingCity}</td>
                                        <td>
                                            {
                                                // Buttons to implement "updateUserShipping" and "removeUserShipping" methods
                                            }
                                            <Button className="fa fa-pencil">
                                                <Link to="/updateUserShipping" />
                                            </Button>
                                            &nbsp;&nbsp;
                                            <Button className="fa fa-times"
                                                    onClick={this.removeUserShipping(userShippingAddress.id)} />
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button className="btn btn-primary" type="submit">Save</button>
                        </form>
                    </div>

                    <AddNewShippingAddress />
                </div>
            </div>
        );
    }
}

MyShipping.propTypes = {
    userShipping: PropTypes.object.isRequired,
    getUserShippingAddresses: PropTypes.func.isRequired,
    addUserShippingAddress: PropTypes.func.isRequired,
    updateUserShippingAddress: PropTypes.func.isRequired,
    removeUserShippingAddress: PropTypes.func.isRequired,
    setDefaultUserShippingAddress: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userShipping: state.userShipping
});

export default connect(
    mapStateToProps,
    { getUserShippingAddresses }
)(MyShipping);