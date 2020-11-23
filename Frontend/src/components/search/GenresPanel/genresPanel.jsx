import React from 'react';

import SearchFilterCheckBoxContainer from 'components/search/SearchFilterCheckBoxContainer/searchFilterCheckBoxContainer';

import './genresPanel.scss';

export default class GenresPanel extends React.PureComponent {
    render() {
        return (
            <section className="genres-panel">
                <SearchFilterCheckBoxContainer title="Adventure" />
                <SearchFilterCheckBoxContainer title="Biography" />
                <SearchFilterCheckBoxContainer title="Classic" />
                <SearchFilterCheckBoxContainer title="Comic" />
                <SearchFilterCheckBoxContainer title="Detective" />
                <SearchFilterCheckBoxContainer title="Drama" />
                <SearchFilterCheckBoxContainer title="FairyTale" />
                <SearchFilterCheckBoxContainer title="Fantasy" />
                <SearchFilterCheckBoxContainer title="Horror" />
                <SearchFilterCheckBoxContainer title="Humor" />
                <SearchFilterCheckBoxContainer title="Poetry" />
                <SearchFilterCheckBoxContainer title="Romance" />
                <SearchFilterCheckBoxContainer title="SciFi" />
            </section>
        );
    }
}
