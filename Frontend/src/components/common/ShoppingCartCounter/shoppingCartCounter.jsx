import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Icon from 'components/common/Icon/icon';
import localStorageHelper from 'helpers/localStorageHelper';


import plus from 'styles/icons/plus.svg';
import minus from 'styles/icons/minus.svg';
import './shoppingCartCounter.scss';

export default class ShoppingCartCounter extends React.Component {
    static propTypes = {
        bookId: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            currentAmount: 0
        };
    }

    componentDidMount = () => {
        if (localStorageHelper.getId()) {
            this.setState({
                currentAmount: localStorageHelper.getAmount({ userId: localStorageHelper.getId(), bookId: this.props.bookId })
            });
        }
    }

    addToShoppingCart = () => {
        localStorageHelper.add({ userId: localStorageHelper.getId(), bookId: this.props.bookId });
        this.setState({
            currentAmount: ++this.state.currentAmount
        });
    }

    removeFromShoppingCart = () => {
        if (this.state.currentAmount > 0) {
            localStorageHelper.deleteItem({ userId: localStorageHelper.getId(), bookId: this.props.bookId });
            this.setState({
                currentAmount: --this.state.currentAmount
            });
        }
    }

    render() {
        if (!localStorageHelper.getId() || localStorageHelper.getId() === '') {
            return null;
        }

        const IconClass = ClassNames('shopping-cart-counter__button-icon', this.props.className);
        return (
            <div className="shopping-cart-counter">
                <button type="button" className="shopping-cart-counter__button" onClick={this.removeFromShoppingCart}>
                    <Icon icon={minus} iconClassName={IconClass} />
                </button>
                <span className="shopping-cart-counter__value">
                    {this.state.currentAmount}
                </span>
                <button type="button" className="shopping-cart-counter__button" onClick={this.addToShoppingCart}>
                    <Icon icon={plus} iconClassName={IconClass} />
                </button>
            </div>
        );
    }
}
