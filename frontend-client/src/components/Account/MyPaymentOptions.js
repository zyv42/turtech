import React, {Component} from 'react';
import { getUserPaymentOptions } from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Route, Switch } from "react-router-dom";
import AddNewPaymentOption from "./AddPaymentOption";
import {Button} from "react-bootstrap";

class MyPaymentOptions extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getUserPaymentOptions(this.props.security.userInfo.name);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.setDefaultUserPaymentOption(this.props.security.userInfo.name, this.state.userPaymentOptions.id);
    }

    removeUserPaymentOption(userPaymentOptionId) {
        this.props.removeUserPaymentOption(this.props.security.userInfo.name, userPaymentOptionId);
    }

    ListOfPaymentOptions = () => {
        const { userPaymentOptions } = this.props;

        if (userPaymentOptions && userPaymentOptions.length > 0) {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
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
                                               value={userPaymentOption.id}
                                               checked={userPaymentOption.defaultPaymentOption}/>
                                    </td>
                                    <td>
                                        {userPaymentOption.cardName}
                                    </td>
                                    <td>
                                        {
                                            // Buttons to implement "updateUserShipping" and "removeUserShipping" methods
                                        }
                                        <Button className="fa fa-pencil">
                                            <Link to={`/updatePaymentOption/${userPaymentOption.id}`} />
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button className="fa fa-times"
                                                onClick={this.removeUserPaymentOption(userPaymentOption.id)}>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="btn btn-primary"
                                type="submit">Save
                        </button>
                    </form>
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
                                    <Link to="/myAccount">
                                        List of Credit Cards</Link></li>
                                <li className="breadcrumb-item">
                                    <Link to="/myAccount/addNewPaymentOption">
                                        Add Credit Card</Link></li>
                            </ol>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route exact path="/myAccount"
                                       component={this.ListOfPaymentOptions} />

                                <Route exact path="/myAccount/addNewPaymentOption"
                                       component={AddNewPaymentOption} />
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
    setDefaultUserPaymentOption: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    userPaymentOptions: state.userProfile.userPaymentOptions
});

export default connect(
    mapStateToProps,
    { getUserPaymentOptions }
)(MyPaymentOptions);