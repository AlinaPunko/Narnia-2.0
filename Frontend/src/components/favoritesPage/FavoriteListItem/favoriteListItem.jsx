import React from 'react';
import PropTypes from 'prop-types';

import ShoppingCartCounter from 'components/common/ShoppingCartCounter/shoppingCartCounter';
import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/openDetailsPageButton';

import './favoriteListItem.scss';

export default class FavoriteListItem extends React.PureComponent {
    static propTypes = {
        book: PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string,
            authors: PropTypes.array.isRequired,
            title: PropTypes.string.isRequired,
            genres: PropTypes.array.isRequired,
            price: PropTypes.number.isRequired,
            pagesCount: PropTypes.number,
            publishingYear: PropTypes.number
        }).isRequired,
        deleteItem: PropTypes.func.isRequired
    };

    deleteItem = () => {
        const { deleteItem } = this.props;
        deleteItem(this.props.book.id);
    }

    render() {
        const {
            id, title, image, pagesCount, publishingYear, price, authors, genres
        } = this.props.book;

        return (
            <div className="favorite-list-item">
                <div>
                    <div className="favorite-list-item__title">{title}</div>
                    <div className="favorite-list-item__authors">{authors.join(', ')}</div>
                    <div className="favorite-list-item__genres">{genres.join(', ')}</div>
                    <div className="favorite-list-item__pages">Pages: {pagesCount}</div>
                    <div className="favorite-list-item__publishing-year">Publishing year: {publishingYear}</div>
                    <div className="favorite-list-item__price">Price: {price}</div>
                    <ShoppingCartCounter bookId={id} className="book-details-page__icon" />
                    <OpenDetailsPageButton bookId={id} className="favorite-list-item__open-details-page-button" />
                    <button type="button" className="favorite-list-item__remove-favorite-button" onClick={this.deleteItem}>Remove favorite</button>
                </div>
                <img alt="Item_image" className="favorite-list-item__image" src={image} />
            </div>
        );
    }
}
