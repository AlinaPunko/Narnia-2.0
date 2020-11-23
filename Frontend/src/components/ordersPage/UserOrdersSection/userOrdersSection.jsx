import React from 'react';

import localStorageHelper from 'helpers/localStorageHelper';
import dateHelper from 'helpers/dateHelper';
import orderService from 'services/orderService';
import Icon from 'components/common/Icon/icon';

import preloader from 'styles/icons/preloader.svg';
import './userOrdersSection.scss';

export default class UserOrdersSection extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            orders: [],
            isLoading: true
        };
    }

    componentDidMount = async () => {
        const result = await orderService.getByUserId(localStorageHelper.getId());
        this.setState({
            orders: result,
            isLoading: false
        });
    }

    renderOrders = () => {
        return this.state.orders.map((order) => {
            const booksParagraphs = [];

            order.books.forEach((element) => {
                booksParagraphs.push(<p>{element.authors.join(',')} "{element.title}" - {element.amount} items</p>);
            });
            return (
                <tr className="user-orders-section__orders-line">
                    <td className="user-orders-section__line-td">{order.id}</td>
                    <td className="user-orders-section__line-td">{booksParagraphs}</td>
                    <td className="user-orders-section__line-td">{dateHelper.getDate(order.date)}</td>
                    <td className="user-orders-section__line-td">{order.sum}</td>
                    <td className="user-orders-section__line-td">{order.status}</td>
                </tr>
            );
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="user-orders-section__preloader">
                    <Icon iconClassName="user-orders-section__preloader-icon" icon={preloader} />
                </div>
            );
        }

        return (
            <section className="user-orders-section">
                <h1 className="user-orders-section__title">My orders</h1>
                {this.state.orders.length === 0 && (<h2 className="user-orders-section__title">You haven't bougth any books yet</h2>)}
                <table className="user-orders-section__orders-table">
                    <tr className="user-orders-section__orders-header">
                        <td className="user-orders-section__header-td">Id</td>
                        <td className="user-orders-section__header-td">Books</td>
                        <td className="user-orders-section__header-td">Date</td>
                        <td className="user-orders-section__header-td">Total price</td>
                        <td className="user-orders-section__header-td">Status</td>
                    </tr>
                    {this.renderOrders()}
                </table>
            </section>
        );
    }
}
