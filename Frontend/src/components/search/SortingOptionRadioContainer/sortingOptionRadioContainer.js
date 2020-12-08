import { connect } from 'react-redux';

import { sort } from 'store/actions';

import SortingOptionRadio from 'components/search/SortingOptionRadio/sortingOptionRadio';

const mapStateToProps = (state) => ({
    orderBy: state.orderBy
});

const mapDispatchToProps = (dispatch) => ({
    onInput: (orderBy) => dispatch(sort(orderBy))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortingOptionRadio);
