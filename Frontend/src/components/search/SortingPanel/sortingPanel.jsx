import React from 'react';

import SortingOptionRadioContainer from 'components/search/SortingOptionRadioContainer/sortingOptionRadioContainer';

import './sortingPanel.scss';

export default class SortingPanel extends React.PureComponent {
    render() {
        return (
            <div className="sorting-panel">
                <h2 className="sorting-panel__title">Sort By</h2>
                <div className="sorting-panel__options">
                    <SortingOptionRadioContainer title="Adding Asc" isChecked />
                    <SortingOptionRadioContainer title="Title Asc" />
                    <SortingOptionRadioContainer title="Price Asc" />
                    <SortingOptionRadioContainer title="Adding Desc" />
                    <SortingOptionRadioContainer title="Title Desc" />
                    <SortingOptionRadioContainer title="Price Desc" />
                </div>
            </div>
        );
    }
}
