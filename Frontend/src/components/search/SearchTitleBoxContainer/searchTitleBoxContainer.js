import { connect } from 'react-redux';

import { setFilterByTitle } from 'store/actions';
import SearchTitleBox from 'components/search/SearchTitleBox/searchTitleBox';

const mapStateToProps = (state) => ({
    searchTitleQuery: state.searchTitleQuery
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (searchTitleQuery) => dispatch(setFilterByTitle(searchTitleQuery))
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(SearchTitleBox);
