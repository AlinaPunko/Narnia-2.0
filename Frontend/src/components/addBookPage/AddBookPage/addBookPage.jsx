import React from 'react';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';


import Input from 'components/common/Input/input';
import bookService from 'services/bookService';
import authorService from 'services/authorService';
import serviceWrapper from 'helpers/serviceWrapper';
import redirectHelper from 'helpers/redirectHelper';
import localStorageHelper from 'helpers/localStorageHelper';
import AddAuthorBlock from 'components/addBookPage/AddAuthorBlock/addAuthorBlock';
import AddGenreBlock from 'components/addBookPage/AddGenreBlock/addGenreBlock';
import PhotoSelector from 'components/common/PhotoSelector/photoSelector';
import bookValidationConfig from 'validationConfigs/bookValidationConfig';
import Icon from 'components/common/Icon/icon';

import preloader from 'styles/icons/preloader.svg';
import './addBookPage.scss';

export default class AddBookPage extends React.Component {
    static propTypes = {
        history: PropTypes.shape({
            length: PropTypes.number.isRequired,
            action: PropTypes.string.isRequired,
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired,
                search: PropTypes.string.isRequired,
                hash: PropTypes.string.isRequired,
                key: PropTypes.string.isRequired
            }),
            push: PropTypes.func.isRequired
        }).isRequired,
        match: PropTypes.shape({
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isExact: PropTypes.bool.isRequired,
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }


    constructor() {
        super();

        this.validator = new SimpleReactValidator();
        this.errorFieldRef = React.createRef();
        this.state = {
            id: 0,
            image: '',
            title: '',
            publishingYear: '',
            pagesCount: '',
            price: '',
            description: '',
            count: '',
            genres: [],
            authors: [],
            allAuthors: [],
            isLoading: true
        };
    }

    componentDidMount = async () => {
        this.getAllAuthors();

        this.setState;
        if (this.props.match.params.id !== '0') {
            const book = await bookService.getById(this.props.match.params.id);
            if (book) {
                this.setState({
                    id: book.id,
                    image: book.image,
                    title: book.title,
                    publishingYear: book.publishingYear,
                    pagesCount: book.pagesCount,
                    price: book.price,
                    description: book.description,
                    count: book.count,
                    genres: book.genres,
                    authors: book.authors,
                    isLoading: false
                });
            }
        } else {
            this.setState({
                isLoading: false
            });
        }
    }

    getAllAuthors = async () => {
        const result = await serviceWrapper.callService(authorService.get, null, null);
        if (result) {
            this.setState({ allAuthors: result, isLoading: false });
        }
    }

    deleteImage = () => {
        this.setState({ image: '' });
    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    changePrice = (event) => {
        this.setState({
            price: event.target.value
        });
    }

    changePagesCount = (event) => {
        this.setState({
            pagesCount: event.target.value
        });
    }

    changeDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    changePublishingYear = (event) => {
        this.setState({
            publishingYear: event.target.value
        });
    }

    changeCount = (event) => {
        this.setState({
            count: event.target.value
        });
    }

    changeImage = (image) => {
        this.setState({ image });
    }

    addAuthor = (author) => {
        const { authors } = this.state;
        authors.push(author);
        this.setState({ authors });
    }

    deleteAuthor = (author) => {
        const { authors } = this.state;
        authors.splice(authors.indexOf(author), 1);
        this.setState({ authors });
    }

    deleteGenre = (genre) => {
        const { genres } = this.state;
        genres.splice(genres.indexOf(genre), 1);
        this.setState({ genres });
    }

    addGenre = (genre) => {
        const { genres } = this.state;
        genres.push(genre);
        this.setState({ genres });
    }

    save = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const bookData = { ...this.state };
            delete bookData.isLoading;
            delete bookData.allAuthors;
            if (this.state.id === 0) {
                await serviceWrapper.callService(bookService.add, bookData, this.errorFieldRef);
            } else {
                await serviceWrapper.callService(bookService.update, bookData, this.errorFieldRef);
            }

            redirectHelper.redirectToHomePage(this.props.history);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    renderValidationResult = () => {
        const messages = [
            this.validator.message(bookValidationConfig.title.fieldName, this.state.title, bookValidationConfig.title.rule),
            this.validator.message(bookValidationConfig.price.fieldName, this.state.price, bookValidationConfig.price.rule),
            this.validator.message(bookValidationConfig.image.fieldName, this.state.image, bookValidationConfig.image.rule),
            this.validator.message(bookValidationConfig.publishingYear.fieldName, this.state.publishingYear, bookValidationConfig.publishingYear.rule),
            this.validator.message(bookValidationConfig.description.fieldName, this.state.description, bookValidationConfig.description.rule),
            this.validator.message(bookValidationConfig.pagesCount.fieldName, this.state.pagesCount, bookValidationConfig.pagesCount.rule),
            this.validator.message(bookValidationConfig.count.fieldName, this.state.count, bookValidationConfig.count.rule)
        ];

        return (
            <div className="add-book-page__validation-result" ref={this.errorFieldRef}>
                {messages}
            </div>
        );
    }

    render() {
        if (localStorageHelper.getRole() !== 'admin') {
            return <h1 className="add-book-page__title">You don't have permission to do it</h1>;
        }
        if (this.state.isLoading) {
            return (
                <div className="add-book-page__preloader">
                    <Icon iconClassName="add-book-page__preloader-icon" icon={preloader} />
                </div>
            );
        }
        return (
            <section className="add-book-page">
                <h1 className="add-book-page__title">Add or update book</h1>
                <form className="add-book-page__form" onSubmit={this.save}>
                    <div className="add-book-page__image-block">
                        <img
                            className="add-book-page__book-image"
                            alt="book"
                            src={this.state.image}
                        />
                        <PhotoSelector onChange={this.changeImage} />
                        <button className="add-book-page__form-button" type="button" onClick={this.deleteImage}>
                            Delete photo
                        </button>
                        <Input
                            name="description"
                            type="text"
                            label="Description:"
                            onChange={this.changeDescription}
                            value={this.state.description}
                        />
                    </div>
                    <div>
                        <Input name="title" type="text" label="Title:" onChange={this.changeTitle} value={this.state.title} />
                        <Input name="price" type="text" label="Price:" onChange={this.changePrice} value={this.state.price} />
                        <Input name="pages" type="text" label="Pages:" onChange={this.changePagesCount} value={this.state.pagesCount} />
                        <Input name="count" type="text" label="Count:" onChange={this.changeCount} value={this.state.count} />
                        <Input name="publishingYear" type="text" label="Publishing Year:" onChange={this.changePublishingYear} value={this.state.publishingYear} />
                        {
                            this.renderValidationResult()
                        }
                    </div>
                    <div className="add-book-page__author-genres">
                        <AddGenreBlock
                            genres={this.state.genres}
                            addGenre={this.addGenre}
                            deleteGenre={this.deleteGenre}
                        />
                        <AddAuthorBlock
                            authors={this.state.authors}
                            allAuthors={this.state.allAuthors}
                            addAuthor={this.addAuthor}
                            deleteAuthor={this.deleteAuthor}
                        />
                    </div>
                    <button type="submit" className="add-book-page__form-button">Add book</button>
                </form>
            </section>
        );
    }
}
