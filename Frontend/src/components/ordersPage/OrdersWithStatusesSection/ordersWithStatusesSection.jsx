/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
import React from 'react';

import dateHelper from 'helpers/dateHelper';
import orderService from 'services/orderService';
import Icon from 'components/common/Icon/icon';

import preloader from 'styles/icons/preloader.svg';
import './ordersWithStatusesSection.scss';

class ApproveOrder extends React.PureComponent {
    approveOrder = async () => {
        await orderService.UpdateStatus({ orderId: this.props.orderId, status: 'Approved' });
        this.props.updateOrders();
    }

    render() {
        return (
            <button className="approve-button" type="button" onClick={this.approveOrder}>
                Approve
            </button>
        );
    }
}

class CancelOrder extends React.PureComponent {
    cancelOrder = async () => {
        await orderService.UpdateStatus({ orderId: this.props.orderId, Status: 'Cancelled' });
        this.props.updateOrders();
    }

    render() {
        return (
            <button className="cancel-button" type="button" onClick={this.cancelOrder}>
                Cancel
            </button>
        );
    }
}

export default class OrdersWithStatusesSection extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            pendingOrders: [],
            allOrders: [],
            isLoading: true
        };
    }

    componentDidMount = async () => {
        this.updateOrders();
    }

    updateOrders = async () => {
        const pendingOrders = await orderService.getPending();
        const allOrders = await orderService.getAll();
        this.setState({
            pendingOrders,
            allOrders,
            isLoading: false
        });
    }

    renderAllOrders = () => {
        return this.state.allOrders.map((order) => {
            const booksParagraphs = [];

            order.books.forEach((element) => {
                booksParagraphs.push(<p>{element.authors.join(',')} "{element.title}" - {element.amount} items</p>);
            });
            return (
                <tr className="orders-with-statuses-section__orders-line">
                    <td className="orders-with-statuses-section__line-td">{order.id}</td>
                    <td className="orders-with-statuses-section__line-td">{booksParagraphs}</td>
                    <td className="orders-with-statuses-section__line-td">{dateHelper.getDate(order.date)}</td>
                    <td className="orders-with-statuses-section__line-td">{order.sum}</td>
                    <td className="orders-with-statuses-section__line-td">{order.status}</td>
                </tr>
            );
        });
    }

    renderPendingOrders = () => {
        return this.state.pendingOrders.map((order) => {
            const booksParagraphs = [];

            order.books.forEach((element) => {
                booksParagraphs.push(<p>{element.authors.join(',')} "{element.title}" - {element.amount} items</p>);
            });
            return (
                <tr className="orders-with-statuses-section__orders-line">
                    <td className="orders-with-statuses-section__line-td">{order.id}</td>
                    <td className="orders-with-statuses-section__line-td">{booksParagraphs}</td>
                    <td className="orders-with-statuses-section__line-td">{dateHelper.getDate(order.date)}</td>
                    <td className="orders-with-statuses-section__line-td">{order.sum}</td>
                    <td className="orders-with-statuses-section__line-td">{order.status}
                        <div>
                            <CancelOrder orderId={order.id} updateOrders={this.updateOrders} />
                            <ApproveOrder orderId={order.id} updateOrders={this.updateOrders} />
                        </div>
                    </td>
                </tr>
            );
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="orders-with-statuses-section__preloader">
                    <Icon iconClassName="orders-with-statuses-section__preloader-icon" icon={preloader} />
                </div>
            );
        }

        return (
            <section className="orders-with-statuses-section">
                <h1 className="orders-with-statuses-section__title">Pending orders</h1>
                <table className="orders-with-statuses-section__orders-table">
                    <tr className="orders-with-statuses-section__orders-header">
                        <td className="orders-with-statuses-section__header-td">Id</td>
                        <td className="orders-with-statuses-section__header-td">Books</td>
                        <td className="orders-with-statuses-section__header-td">Date</td>
                        <td className="orders-with-statuses-section__header-td">Total price</td>
                        <td className="orders-with-statuses-section__header-td">Status </td>
                    </tr>
                    {this.renderPendingOrders()}
                </table>

                <h1 className="orders-with-statuses-section__title">All orders</h1>
                <table className="orders-with-statuses-section__orders-table">
                    <tr className="orders-with-statuses-section__orders-header">
                        <td className="orders-with-statuses-section__header-td">Id</td>
                        <td className="orders-with-statuses-section__header-td">Books</td>
                        <td className="orders-with-statuses-section__header-td">Date</td>
                        <td className="orders-with-statuses-section__header-td">Total price</td>
                        <td className="orders-with-statuses-section__header-td">Status </td>
                    </tr>
                    {this.renderAllOrders()}
                </table>
            </section>
        );
    }
}
