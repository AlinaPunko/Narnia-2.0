import React from 'react';
import PropTypes from 'prop-types';

import './sortingOptionRadio.scss';

export default class SortingOptionRadio extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onInput: PropTypes.func.isRequired,
        // eslint-disable-next-line react/require-default-props
        isChecked: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            orderBy: this.props.title
        };
    }

    changeValue = () => {
        this.props.onInput({
            orderBy: this.state.orderBy
        });
    }

    render() {
        return (
            <div className="sorting-option-radio">
                <div className="sorting-option-radio__title">{this.props.title}</div>
                <input
                    className="sorting-option-radio__radio"
                    name="orderBy"
                    onChange={this.changeValue}
                    type="radio"
                    defaultChecked={this.props.isChecked}
                />
            </div>
        );
    }
}
