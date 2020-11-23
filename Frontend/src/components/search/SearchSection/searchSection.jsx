import React from 'react';

import FiltersPanel from 'components/search/FiltersPanel/filtersPanel';
import GenresPanel from 'components/search/GenresPanel/genresPanel';
import SearchTitleBoxContainer from 'components/search/SearchTitleBoxContainer/searchTitleBoxContainer';
import SearchAuthorBoxContainer from 'components/search/SearchAuthorBoxContainer/searchAuthorBoxContainer';

import './searchSection.scss';

export default class SearchSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { isFiltersPanelShown: false };
    }


    openFiltersPanel = () => {
        this.setState({ isFiltersPanelShown: true });
    }

    render() {
        return (
            <div className="search-section">
                <SearchTitleBoxContainer openFiltersPanel={this.openFiltersPanel} />
                <SearchAuthorBoxContainer openFiltersPanel={this.openFiltersPanel} />
                {this.state.isFiltersPanelShown
                    && (
                        <>
                            <FiltersPanel />
                            <GenresPanel />
                        </>
                    )}
            </div>
        );
    }
}
