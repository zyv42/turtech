import React, {Component} from 'react';
import { getUserPaymentOptions, removeUserPaymentOption, setDefaultUserPaymentOption } from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Route, Switch } from "react-router-dom";
import AddNewPaymentOption from "./AddPaymentOption";
import {Button} from "react-bootstrap";
import UpdatePaymentOption from "./UpdatePaymentOption";

class MyPaymentOptions extends Component {

    componentDidMount() {
        this.props.getUserPaymentOptions(this.props.security.userInfo.sub);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userPaymentOptions !== this.props.userPaymentOptions) {
            this.setState({});
        }
    }

    onRadioClick(paymentOptionId) {
        this.props.setDefaultUserPaymentOption(this.props.security.userInfo.sub, paymentOptionId);
    }

    onDeleteClick(userPaymentOptionId) {
        this.props.removeUserPaymentOption(this.props.security.userInfo.sub, userPaymentOptionId);
    }

    renderPaymentOptions = () => {
        const { userPaymentOptions } = this.props;

        if (userPaymentOptions && userPaymentOptions.length > 0) {
            return (
                <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Default</th>
                                <th>Credit Card</th>
                                <th>Operations</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userPaymentOptions.map(userPaymentOption => (
                                <tr>
                                    <td>
                                        <input type="radio"
                                               name="defaultUserPaymentId"
                                               onClick={this.onRadioClick.bind(this, userPaymentOption.id)}
                                               value={userPaymentOption.id}
                                               checked={userPaymentOption.defaultPaymentOption}/>
                                    </td>
                                    <td>
                                        {userPaymentOption.cardName},&nbsp;
                                        {userPaymentOption.cardNumber}
                                    </td>
                                    <td>
                                        <Link className="btn btn-primary"
                                              to={{pathname: "/user-cabinet/billing/update-payment-option",
                                              state: {params: {paymentOptionId: userPaymentOption.id,
                                                      billingAddressId: userPaymentOption.billingAddressId}}}}>
                                            <i className="fa fa-pencil" />
                                        </Link>
                                        &nbsp;&nbsp;
                                        <Button className="btn btn-danger"
                                                onClick={this.onDeleteClick.bind(this, userPaymentOption.id)}>
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
                    No User Payment Options were specified yet.
                </div>
            )
        }
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Billing</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/user-cabinet/billing">
                                        List of Credit Cards</Link></li>
                                <li className="breadcrumb-item">
                                    <Link to="/user-cabinet/billing/new-payment-option">
                                        Add Credit Card</Link></li>
                            </ol>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route exact path="/user-cabinet/billing"
                                       component={this.renderPaymentOptions} />
                                <Route exact path="/user-cabinet/billing/new-payment-option"
                                       component={AddNewPaymentOption} />
                                <Route exact path="/user-cabinet/billing/update-payment-option"
                                       component={UpdatePaymentOption} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MyPaymentOptions.propTypes = {
    userPaymentOptions: PropTypes.object.isRequired,
    getUserPaymentOptions: PropTypes.func.isRequired,
    setDefaultUserPaymentOption: PropTypes.func.isRequired,
    removeUserPaymentOption: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    userPaymentOptions: state.userProfile.userPaymentOptions
});

export default connect(
    mapStateToProps,
    { getUserPaymentOptions, removeUserPaymentOption, setDefaultUserPaymentOption }
)(MyPaymentOptions);