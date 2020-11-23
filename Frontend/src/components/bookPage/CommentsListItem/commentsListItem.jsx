import React from 'react';

import './commentsListItem.scss';

export default class CommentsListItem extends React.PureComponent {
    render() {
        const { comment, key } = this.props;
        debugger;
        return (
            <li key={key} className="comments-list-item">
                <div>
                    <div className="comments-list-item__user-name">{comment.user.name}</div>
                    <img alt="User_image" className="comments-list-item__image" src={comment.user.image} />
                </div>
                <div className="comments-list-item__text">{comment.text}</div>
            </li>
        );
    }
}
