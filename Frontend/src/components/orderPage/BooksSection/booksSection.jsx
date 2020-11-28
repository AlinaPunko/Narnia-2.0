import React from 'react';
import PropTypes from 'prop-types';


import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/openDetailsPageButton';
import FavoriteButton from 'components/common/FavoriteButton/favoriteButton';
import localStorageHelper from 'helpers/localStorageHelper';
import bookService from 'services/bookService';
import orderService from 'services/orderService';
import Icon from 'components/common/Icon/icon';

import bookIcon from 'styles/icons/book.svg';
import preloader from 'styles/icons/preloader.svg';
import './booksSection.scss';

export default class BooksSection extends React.Component {
    static propTypes = {
        history: PropTypes.shape({
            length: PropTypes.number.isRequired,
            action: PropTypes.string.isRequired,
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired,
                search: PropTypes.string.isRequired,
                hash: PropTypes.string.isRequired,
                key: PropTypes.string.isRequired
            }),
            push: PropTypes.func.isRequired
        }).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            sum: 0,
            isLoading: true
        };
    }


    componentDidMount = async () => {
        const { books } = localStorageHelper.getUserItems(localStorageHelper.getId());
        const result = [];

        for (const element of books) {
            const bookInfo = await bookService.getById(element.bookId);
            bookInfo.amount = element.amount;

            this.setState({
                sum: parseFloat((this.state.sum + bookInfo.price * bookInfo.amount).toFixed(2))
            });
            result.push(bookInfo);
        }

        this.setState({
            books: result,
            isLoading: false
        });
    }

    renderBooks = () => {
        const components = [];
        const { books } = this.state;

        books.forEach((element) => {
            const authors = [];
            element.authors.forEach((author) => {
                authors.push(author);
            });

            const genres = [];
            element.genres.forEach((genre) => {
                genres.push(genre);
            });

            components.push(
                <div className="books-section-list-item">
                    <div>
                        <div className="books-section-list-item__title">{element.title}</div>
                        <div className="books-section-list-item__authors">Authors: {authors.join(', ')}</div>
                        <div className="books-section-list-item__genres">Genres: {genres.join(', ')}</div>
                        <div className="books-section-list-item__pages">Pages: {element.pagesCount}</div>
                        <div className="books-section-list-item__publishing-year">Publishing year: {element.publishingYear}</div>
                        <div className="books-section-list-item__price">Price: {element.price}</div>
                        <div className="books-section-list-item__amount">Amount: {element.amount}</div>
                        <div className="books-section-list-item__buttons">
                            <OpenDetailsPageButton bookId={element.id} className="books-section-list-item__details-button" />
                            <FavoriteButton book={element} className="books-section-list-item__favorite-button" />
                        </div>
                    </div>
                    {
                        (element.image === null || element.image === '')
                            ? (
                                <Icon iconClassName="books-section-list-item__image" icon={bookIcon} />
                            )
                            : (
                                <img
                                    alt="book"
                                    src={element.image}
                                    className="books-section-list-item__image"
                                />
                            )
                    }
                </div>
            );
        });

        return components;
    }

    saveOrder = async () => {
        const order = this.state;
        delete order.isLoading;
        order.books.forEach((element) => {
            delete element.comments;
        });
        order.userId = localStorageHelper.getId();
        await orderService.add(order);
        alert('We received your order, the manager will call you as soon as possible');
        localStorageHelper.deleteUsersCart(localStorageHelper.getId());
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="books-section">
                {this.renderBooks()}
                {
                    this.state.isLoading && (
                        <div className="books-section__preloader">
                            <Icon iconClassName="books-section__preloader-icon" icon={preloader} />
                        </div>
                    )
                }
                <h2 className="books-section__total-price">Total price: {this.state.sum}</h2>
                <button className="books-section__save-button" type="button" onClick={this.saveOrder}>Pay for order</button>
            </div>
        );
    }
}
