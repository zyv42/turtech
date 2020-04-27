import React, {Component} from 'react';

class UserReview extends Component {
    render() {
        const { review } = this.props;
        return (
            <div>
                <i className="fa fa-calendar" aria-hidden="true" />
                <span>{review.timestamp.toLocaleDateString()} {review.timestamp.toLocaleTimeString()}</span>
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" /> by
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