import actionTypes from 'store/actions/actionTypes';

export const addBooks = (books) => ({
    type: actionTypes.ADD_BOOKS,
    books
});

export const setFilter = (filter) => ({
    type: actionTypes.SET_FILTER,
    filter
});

export const setGenre = (genre) => ({
    type: actionTypes.SET_CATEGORY,
    genre
});

export const setFilterByTitle = (searchTitleQuery) => ({
    type: actionTypes.SET_FILTER_BY_TITLE,
    searchTitleQuery
});

export const setFilterByAuthor = (searchAuthorQuery) => ({
    type: actionTypes.SET_FILTER_BY_AUTHOR,
    searchAuthorQuery
});
