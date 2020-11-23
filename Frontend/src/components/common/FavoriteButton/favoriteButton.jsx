import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { UserContext } from 'store/context/UserContext';
import favoritesServices from 'services/favoritesService';
import favoriteItemHelper from 'helpers/favoriteItemHelper';
import localStorageHelper from 'helpers/localStorageHelper';

import './favoriteButton.scss';

export default class FavoriteButton extends React.PureComponent {
    static propTypes = {
        book: PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        className: PropTypes.string.isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.state = { isFavorite: favoriteItemHelper.isFavorite(this.props.book, this.context.favoriteBooks) };
    }

    toggleFavoriteState = () => {
        this.state.isFavorite
            ? favoritesServices.deleteItem(localStorageHelper.getId(), this.props.book.id)
            : favoritesServices.add(localStorageHelper.getId(), this.props.book);
        this.setState({ isFavorite: !this.state.isFavorite });
    }

    render() {
        const buttonClass = classnames('favorite-button', this.props.className);
        return (
            (localStorageHelper.getId() !== '' && localStorageHelper.getId() !== null)
                && (
                    <button
                        type="button"
                        className={buttonClass}
                        onClick={this.toggleFavoriteState}
                    >
                        {this.state.isFavorite ? 'Remove favorite' : 'favorite'}
                    </button>
                )
        );
    }
}

FavoriteButton.contextType = UserContext;
