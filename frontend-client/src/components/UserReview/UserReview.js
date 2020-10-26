import React, {Component} from 'react';

class UserReview extends Component {
    render() {
        const { review } = this.props;
        return (
            <div>
                <i className="fa fa-calendar" aria-hidden="true" />
                <span>{new Date(review.timestamp).toLocaleDateString()} {new Date(review.timestamp).toLocaleTimeString()}</span>&nbsp;
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" /> by&nbsp;
                <span>{review.authorName}</span>
                <p className="blockquote">
                    <p className="mb-0">{review.text}</p>
                </p>
                <hr />
            </div>
        );
    }
}

export default UserReview;