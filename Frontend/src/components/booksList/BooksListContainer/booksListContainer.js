import { connect } from 'react-redux';
import { addBooks } from 'store/actions';
import BooksList from 'components/booksList/BooksList/booksList';
import books from '../../../store/reducers/booksReducer';

const arrayContainsArray = (superset, subset) => {
    if (subset.length === 0) {
        return true;
    }
    return subset.every((value) => {
        return (superset.indexOf(value) >= 0);
    });
};

const dynamicSort = (property) => {
    let sortOrder = 1;
    if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    };
};

const getFilteredBooks = (state) => {
    const books = state.books.filter((book) => book.price <= state.filter.price
        && book.publishingYear <= state.filter.publishingYear
        && book.pagesCount <= state.filter.pages
        && book.title.toLowerCase().includes(state.filter.searchTitleQuery.toLowerCase())
        && book.authors.join().toLowerCase().includes(state.filter.searchAuthorQuery.toLowerCase())
        && arrayContainsArray(book.genres, state.filter.genres));

    switch (state.sorting.orderBy) {
    case 'Adding Asc':
        return books;
    case 'Adding Desc':
        return books.reverse();
    case 'Title Asc':
        return books.sort(dynamicSort('title'));
    case 'Title Desc':
        return books.sort(dynamicSort('-title'));
    case 'Price Asc':
        return books.sort(dynamicSort('price'));
    case 'Price Desc':
        return books.sort(dynamicSort('-price'));
    default: return books;
    }
};

const mapStateToProps = (state) => ({
    books: getFilteredBooks(state)
});

const mapDispatchToProps = (dispatch) => ({
    addBooks: (result) => dispatch(addBooks(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
