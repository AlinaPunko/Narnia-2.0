import { connect } from 'react-redux';

import { setGenre } from 'store/actions';

import SearchFilterCheckBox from 'components/search/SearchFilterCheckBox/searchFilterCheckBox';

const mapStateToProps = (state) => ({
    shouldInclude: state.isChecked,
    genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
    onInput: (shouldInclude, genre) => dispatch(setGenre(shouldInclude, genre))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilterCheckBox);
