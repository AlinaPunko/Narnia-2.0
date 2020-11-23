import React from 'react';
import PropTypes from 'prop-types';

import bookService from 'services/bookService';
import localStorageHelper from 'helpers/localStorageHelper';

import CommentListItem from 'components/bookPage/CommentsListItem/commentsListItem';

import './commentsSection.scss';

export default class CommentsSection extends React.PureComponent {
    static propTypes = {
        bookId: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired
    }


    constructor(props) {
        super(props);

        this.state = {
            text: '',
            currentComments: this.props.comments
        };
    }

    addComment = async () => {
        const comment = {
            bookId: this.props.bookId,
            userId: localStorageHelper.getId(),
            text: this.state.text
        };

        const result = await bookService.addComment(comment);

        this.setState({ currentComments: result });
    }

    changeComment = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <section className="comments-section">
                <h2 className="comments-section__title">Comments</h2>
                <textarea
                    onChange={this.changeComment}
                    value={this.state.message}
                    placeholder="Enter your opinion here"
                    className="comments-section__comment"
                />
                <button type="button" className="comments-section__button" onClick={this.addComment}>Add</button>
                <ul>
                    {this.state.currentComments.map((comment, index) => { return <CommentListItem key={index} comment={comment} />; })}
                </ul>
            </section>
        );
    }
}
