import actionTypes from 'store/actions/actionTypes';

const defaultState = {
    pages: 1000,
    publishingYear: 2020,
    price: 100,
    searchTitleQuery: '',
    searchAuthorQuery: '',
    genres: []
};

const getNewGenres = (state, action) => {
    action.genre.shouldInclude
        ? state.genres.push(action.genre.genre)
        : state.genres.splice(state.genres.indexOf(action.genre.genre), 1);
    return state.genres;
};

const filter = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.SET_FILTER:
    {
        return {
            ...state,
            [action.filter.type]: Number.parseInt(action.filter.value, 10)
        };
    }
    case actionTypes.SET_FILTER_BY_TITLE:
    {
        return {
            ...state,
            searchTitleQuery: action.searchTitleQuery
        };
    }
    case actionTypes.SET_FILTER_BY_AUTHOR:
    {
        return {
            ...state,
            searchAuthorQuery: action.searchAuthorQuery
        };
    }
    case actionTypes.SET_CATEGORY: {
        return {
            ...state,
            genres: getNewGenres(state, action)
        };
    }
    default:
        return state;
    }
};

export default filter;
