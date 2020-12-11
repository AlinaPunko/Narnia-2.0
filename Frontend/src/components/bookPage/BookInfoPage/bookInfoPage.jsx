import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ShoppingCartCounter from 'components/common/ShoppingCartCounter/shoppingCartCounter';
import Icon from 'components/common/Icon/icon';
import FavoriteButton from 'components/common/FavoriteButton/favoriteButton';
import CommentsSection from 'components/bookPage/CommentsSection/commentsSection';
import RatingPanel from 'components/bookPage/RatingPanel/ratingPanel';
import bookService from 'services/bookService';
import urlHelper from 'helpers/urlHelper';
import localStorageHelper from 'helpers/localStorageHelper';
import routing from 'constants/routing';

import bookIcon from 'styles/icons/book.svg';
import preloader from 'styles/icons/preloader.svg';
import edit from 'styles/icons/edit.svg';
import './bookInfoPage.scss';

export default class BookInfoPage extends React.PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isExact: PropTypes.bool.isRequired,
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }

    constructor(props) {
        super(props);
        this.state = { book: null, isLoading: true };
        this.getBook(this.props.match.params.id);
    }

    async getBook(id) {
        const result = await bookService.getById(id);
        this.setState({ book: result, isLoading: false });
    }

    render() {
        const { book } = this.state;

        if (this.state.isLoading) {
            return (
                <div className="book-details-page__preloader">
                    <Icon iconClassName="book-details-page__preloader-icon" icon={preloader} />
                </div>
            );
        }

        if (!book) {
            return null;
        }

        return (
            <div>
                <section className="book-details-page">
                    <div className="book-details-page__content">
                        <h1 className="book-details-page__title">{book.title}
                            {
                                localStorageHelper.getRole() === 'admin'
                                    && (
                                        <Link to={urlHelper.getUrlWithParameter(routing.addBookPage.url, /:id/, this.props.match.params.id)}>
                                            <button type="button" className="book-details-page__button">
                                                <Icon icon={edit} iconClassName="book-details-page__icon" />
                                            </button>
                                        </Link>
                                    )
                            }
                        </h1>
                        <div className="book-details-page__authors">{book.authors.join(', ')}</div>
                        <div className="book-details-page__genres">{book.genres.join(', ')}</div>
                        <div className="book-details-page__pages">Pages: {book.pagesCount}</div>
                        <div className="book-details-page__publishing-year">Publishing year: {book.publishingYear}</div>
                        <div className="book-details-page__price">Price: {book.price}</div>
                        {
                            localStorageHelper.getId() !== '' && localStorageHelper.getId() !== undefined && localStorageHelper.getRole() === 'user' && (
                                <>
                                    <FavoriteButton book={book} className="book-details-page__button" />
                                    { book.count > 0 && (
                                        <ShoppingCartCounter bookId={book.id} maxCount={book.count} className="book-details-page__icon" />
                                    )}
                                </>
                            )
                        }
                        <p className="book-details-page__description">{book.description}</p>
                        <RatingPanel rating={book.rating} bookId={book.id} />
                    </div>
                    {
                        (book.image === null || book.image === '')
                            ? (
                                <Icon iconClassName="book-details-page__image" icon={bookIcon} />
                            )
                            : (
                                <img
                                    alt="book"
                                    src={book.image}
                                    className="book-details-page__image"
                                />
                            )
                    }
                </section>
                {
                    localStorageHelper.getId()
                        && (
                            <CommentsSection bookId={book.id} comments={book.comments} />
                        )
                }
            </div>
        );
    }
}
