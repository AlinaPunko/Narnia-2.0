import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';
import UserOrdersSection from 'components/ordersPage/UserOrdersSection/userOrdersSection';
import OrderWithStatusesSection from 'components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection';

import './ordersPage.scss';

export default class OrdersPage extends React.PureComponent {
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
        }).isRequired
    }

    render() {
        if (localStorageHelper.getId() === '' || localStorageHelper.getId() === null) {
            this.props.history.push('/login');
            return null;
        }

        return (
            <div className="orders-page">
                {
                    localStorageHelper.getRole() === 'admin'
                        ? <OrderWithStatusesSection />
                        : <UserOrdersSection />
                }
            </div>
        );
    }
}
