import React from 'react';

import Icon from 'components/common/Icon/icon';

import account from 'styles/icons/account.svg';
import './commentsListItem.scss';

export default class CommentsListItem extends React.PureComponent {
    render() {
        const { comment, key } = this.props;

        return (
            <li key={key} className="comments-list-item">
                <div>
                    <div className="comments-list-item__user-name">{comment.userName}</div>
                    {
                        (comment.userPhoto === null || comment.userPhoto === '')
                            ? (
                                <Icon iconClassName="comments-list-item__image" icon={account} />
                            )
                            : (
                                <img
                                    className="comments-list-item__image"
                                    alt="User_image"
                                    src={comment.userPhoto}
                                />
                            )
                    }
                </div>
                <div className="comments-list-item__text">{comment.text}</div>
            </li>
        );
    }
}
