import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { UserContext } from 'store/context/userContext';
import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/openDetailsPageButton';
import ShoppingCartCounter from 'components/common/ShoppingCartCounter/shoppingCartCounter';
import FavoriteButton from 'components/common/FavoriteButton/favoriteButton';
import Icon from 'components/common/Icon/icon';
import favoritesServices from 'services/favoritesService';
import favoriteItemHelper from 'helpers/favoriteItemHelper';
import localStorageHelper from 'helpers/localStorageHelper';
import urlHelper from 'helpers/urlHelper';
import routing from 'constants/routing';

import bookIcon from 'styles/icons/book.svg';
import edit from 'styles/icons/edit.svg';
import './booksListItem.scss';

export default class BooksListItem extends React.Component {
    static propTypes = {
        book: PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string,
            authors: PropTypes.array.isRequired,
            title: PropTypes.string.isRequired,
            genres: PropTypes.array.isRequired,
            price: PropTypes.number.isRequired,
            pagesCount: PropTypes.number,
            publishingYear: PropTypes.number,
            count: PropTypes.number
        }).isRequired
    };

    static contextType = UserContext;

    constructor(props, context) {
        super(props, context);
        this.state = { isFavorite: favoriteItemHelper.isFavorite(this.props.book, this.context.favoriteBooks) };
    }

    toggleFavoriteState = () => {
        this.state.isFavorite
            ? favoritesServices.deleteItem(this.props.book, localStorageHelper.getId())
            : favoritesServices.add(this.props.book, localStorageHelper.getId());
        this.setState({ isFavorite: !this.state.isFavorite });
    }

    render() {
        const { book } = this.props;

        return (
            <div className="books-list-item">
                {
                    (book.image === null || book.image === '')
                        ? (
                            <Icon iconClassName="books-list-item__image" icon={bookIcon} />
                        )
                        : (
                            <img
                                alt="book"
                                src={book.image}
                                className="books-list-item__image"
                            />
                        )
                }
                <div className="books-list-item__information">
                    <div className="books-list-item__title">{book.title}</div>
                    <div className="books-list-item__authors">{book.authors.join(', ')}</div>
                    <div className="books-list-item__genres">{book.genres.join(', ')}</div>
                    <div className="books-list-item__price">{book.price} р.</div>
                    {
                        localStorageHelper.getRole() === 'admin'
                            && (
                                <Link to={urlHelper.getUrlWithParameter(routing.addBookPage.url, /:id/, book.id)}>
                                    <button type="button" className="books-list-item__button">
                                        <Icon icon={edit} iconClassName="books-list-item__button-icon" />
                                    </button>
                                </Link>
                            )
                    }
                    <OpenDetailsPageButton bookId={book.id} className="books-list-item__open-details-page-button" />
                    {
                        localStorageHelper.getRole() === 'user'
                                && (
                                    <>
                                        <FavoriteButton book={book} className="books-list-item__favorite-button" />
                                        { book.count > 0 && (
                                            <ShoppingCartCounter bookId={book.id} maxCount={book.count} />
                                        )}
                                    </>
                                )
                    }
                </div>
            </div>
        );
    }
}
