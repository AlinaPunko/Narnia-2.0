import React from 'react';

import userService from 'services/userService';
import localStorageHelper from 'helpers/localStorageHelper';
import Icon from 'components/common/Icon/icon';

import preloader from 'styles/icons/preloader.svg';
import './userInfoSection.scss';

export default class UserInfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            name: '',
            email: '',
            address: '',
            phone: ''
        };
    }


    async componentDidMount() {
        const user = await userService.getUser(localStorageHelper.getId());
        this.setState({
            isLoading: false,
            name: user.name,
            address: user.address,
            phone: user.phone,
            email: user.email
        });
    }

    render() {
        return (
            <div className="user-info-section">
                <div className="user-info-section__field">
                    <label className="user-info-section__field-title">Name</label>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        className="user-info-section__field-input"
                        disabled
                    />
                </div>
                <div className="user-info-section__field">
                    <label className="user-info-section__field-title">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        className="user-info-section__field-input"
                        disabled
                    />
                </div>
                <div className="user-info-section__field">
                    <label className="user-info-section__field-title">Address</label>
                    <input
                        name="address"
                        type="text"
                        value={this.state.address}
                        className="user-info-section__field-input"
                        disabled
                    />
                </div>
                <div className="user-info-section__field">
                    <label className="user-info-section__field-title">Phone</label>
                    <input
                        name="phone"
                        type="tel"
                        value={this.state.phone}
                        className="user-info-section__field-input"
                        disabled
                    />
                </div>
                {this.state.isLoading && (
                    <div className="user-info-section__preloader">
                        <Icon iconClassName="user-info-section__preloader-icon" icon={preloader} />
                    </div>
                )}
            </div>
        );
    }
}
