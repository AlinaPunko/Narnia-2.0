import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/icon';
import GenreListItem from 'components/addBookPage/GenreListItem/genreListItem';

import plus from 'styles/icons/plus.svg';
import './addGenreBlock.scss';

export default class AddGenreBlock extends React.Component {
    static propTypes = {
        genres: PropTypes.array.isRequired,
        addGenre: PropTypes.func.isRequired,
        deleteGenre: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            currentGenre: 'Adventure'
        };
    }

    selectGenre = async (e) => {
        this.setState({ currentGenre: e.target.value });
    }

    renderGenres = () => {
        const genres = this.props.genres.map((item, index) => {
            return (
                <GenreListItem key={index} genre={item} deleteGenre={this.props.deleteGenre} />
            );
        });
        return genres;
    }

    addGenre = async () => {
        this.props.addGenre(this.state.currentGenre);
    }

    deleteGenre = async (genre) => {
        this.props.genres.splice(this.props.genres.indexOf(genre), 1);
    }

    render() {
        return (
            <section className="add-genre-block">
                <h2 className="add-genre-block__header">Book's genres</h2>
                <div className="add-genre-block__field">
                    <label className="add-genre-block__field-title">Choose genre</label>
                    <div>
                        <select
                            label="genre"
                            name="genre"

                            onChange={this.selectGenre}
                            className="add-genre-block__field-input"
                        >
                            <option key={1} value="Adventure">Adventure</option>
                            <option key={2} value="Biography">Biography</option>
                            <option key={3} value="Classic">Classic</option>
                            <option key={4} value="Comic">Comic</option>
                            <option key={5} value="Detective">Detective</option>
                            <option key={6} value="Drama">Drama</option>
                            <option key={7} value="FairyTale">FairyTale</option>
                            <option key={8} value="Fantasy">Fantasy</option>
                            <option key={9} value="Horror">Horror</option>
                            <option key={10} value="Humor">Humor</option>
                            <option key={11} value="Poetry">Poetry</option>
                            <option key={12} value="Romance">Romance</option>
                            <option key={13} value="SciFi">SciFi</option>
                        </select>
                    </div>
                    <button type="button" className="add-genre-block__add-button" onClick={this.addGenre}>
                        <Icon icon={plus} iconClassName="header__button-add-button-icon" />
                    </button>
                </div>
                <ul className="add-genre-block__list">
                    {this.renderGenres()}
                </ul>
            </section>
        );
    }
}
