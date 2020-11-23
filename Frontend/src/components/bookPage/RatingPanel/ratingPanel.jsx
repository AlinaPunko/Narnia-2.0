import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Icon from 'components/common/Icon/icon';

import serviceWrapper from 'helpers/serviceWrapper';
import bookService from 'services/bookService';
import localStorageHelper from 'helpers/localStorageHelper';

import './ratingPanel.scss';
import like from 'styles/icons/like.svg';
import dislike from 'styles/icons/dislike.svg';

export default class RatingPanel extends React.PureComponent {
    static propTypes = {
        bookId: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            isLiked: false,
            isDisliked: false,
            currentRating: props.rating
        };
    }

    componentDidMount = async () => {
        const userRate = await bookService.getUserRates(this.props.bookId, localStorageHelper.getId());

        if (userRate === 1) {
            this.setState({ isLiked: true });
        } else if (userRate === -1) {
            this.setState({ isDisliked: true });
        }
    }

    rateItem = (value) => {
        return {
            userId: localStorageHelper.getId(),
            bookId: this.props.bookId,
            value
        };
    }

    increaseRating = async () => {
        if (localStorageHelper.getId() === '' || localStorageHelper.getId() === null) {
            return;
        }

        if (this.state.isDisliked) {
            await serviceWrapper.callService(bookService.rate, this.rateItem(2), null);
            this.setState({
                currentRating: this.state.currentRating += 2,
                isLiked: true,
                isDisliked: false
            });
            return;
        }

        if (this.state.isLiked) {
            await serviceWrapper.callService(bookService.rate, this.rateItem(-1), null);
            this.setState({
                currentRating: this.state.currentRating -= 1,
                isLiked: false,
                isDisliked: false
            });
            return;
        }

        await serviceWrapper.callService(bookService.rate, this.rateItem(1), null);
        this.setState({
            currentRating: this.state.currentRating += 1,
            isLiked: true,
            isDisliked: false
        });
    }

    decreaseRating = async () => {
        if (localStorageHelper.getId() === '' || localStorageHelper.getId() === null) {
            return;
        }

        if (this.state.isDisliked) {
            await serviceWrapper.callService(bookService.rate, this.rateItem(1), null);
            this.setState({
                currentRating: this.state.currentRating += 1,
                isLiked: false,
                isDisliked: false
            });
            return;
        }

        if (this.state.isLiked) {
            await serviceWrapper.callService(bookService.rate, this.rateItem(-2), null);
            this.setState({
                currentRating: this.state.currentRating -= 2,
                isLiked: false,
                isDisliked: true
            });
            return;
        }

        await serviceWrapper.callService(bookService.rate, this.rateItem(-1), null);
        this.setState({
            currentRating: this.state.currentRating -= 1,
            isDisliked: true,
            isLiked: false
        });
    }

    render() {
        const likeButtonIconClass = ClassNames('rating-panel__button-icon', {
            'rating-panel__button-icon--liked': this.state.isLiked
        });
        const dislikeButtonIconClass = ClassNames('rating-panel__button-icon', {
            'rating-panel__button-icon--disliked': this.state.isDisliked
        });

        return (
            <div className="rating-panel">
                <h2 className="rating-panel__title">Rating</h2>
                <div>
                    <button type="button" className="rating-panel__button" onClick={this.decreaseRating}>
                        <Icon icon={dislike} iconClassName={dislikeButtonIconClass} />
                    </button>
                    <span className="rating-panel__value">{this.state.currentRating}</span>
                    <button type="button" className="rating-panel__button" onClick={this.increaseRating}>
                        <Icon icon={like} iconClassName={likeButtonIconClass} />
                    </button>
                </div>
            </div>
        );
    }
}
