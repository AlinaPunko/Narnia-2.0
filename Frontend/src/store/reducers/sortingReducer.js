import actionTypes from 'store/actions/actionTypes';

const defaultState = { orderBy: 'By Adding' };

const sorting = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.SORT:
        return {
            ...state,
            orderBy: action.orderBy.orderBy
        };
    default:
        return state;
    }
};
export default sorting;
