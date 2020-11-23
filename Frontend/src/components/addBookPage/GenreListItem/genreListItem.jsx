import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/icon';

import './genreListItem.scss';
import minus from 'styles/icons/minus.svg';

export default class GenreListItem extends React.Component {
    static propTypes = {
        genre: PropTypes.string.isRequired,
        deleteGenre: PropTypes.func.isRequired
    }


    deleteGenre = () => {
        this.props.deleteGenre(this.props.genre);
    }

    render() {
        return (
            <li className="genre-list-item">
                {this.props.genre}
                <button type="button" className="genre-list-item__delete-button" onClick={this.deleteGenre}>
                    <Icon icon={minus} iconClassName="genre-list-item__delete-button-icon" />
                </button>
            </li>
        );
    }
}
