import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserContext } from 'store/context/userContext';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import SideMenu from 'components/SideMenu/sideMenu';
import AccountMenu from 'components/AccountMenu/accountMenu';
import Routing from 'components/Routing/Routing';

import './app.scss';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.setFavoriteBooks = (favoriteBooks) => {
            this.setState(() => ({
                favoriteBooks
            }));
        };

        this.state = {
            showSideMenu: false,
            showAccountMenu: false,
            favoriteBooks: [],
            setFavoriteBooks: this.setFavoriteBooks
        };
    }

    openSideMenu = () => {
        this.setState({ showSideMenu: true });
    }

    closeSideMenu = () => {
        this.setState({ showSideMenu: false });
    }

    toggleAccountMenu = () => {
        this.setState({ showAccountMenu: !this.state.showAccountMenu });
    }

    openAccountMenu = () => {
        this.setState({ showAccountMenu: true });
    }

    closeAccountMenu = () => {
        this.setState({ showAccountMenu: false });
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <Router>
                    <div className="app">
                        <Header openSideMenuFunction={this.openSideMenu} toggleAccountMenuFunction={this.toggleAccountMenu} />
                        <div className="content">
                            <AccountMenu showMenu={this.state.showAccountMenu} closeFunction={this.closeAccountMenu} />
                            <Routing />
                            <SideMenu showMenu={this.state.showSideMenu} closeFunction={this.closeSideMenu} />
                        </div>
                        <Footer />
                    </div>
                </Router>
            </UserContext.Provider>
        );
    }
}
