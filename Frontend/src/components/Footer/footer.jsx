import React from 'react';

import './footer.scss';

export default class Footer extends React.PureComponent {
    render() {
        return (
            <>
                <footer className="footer">
                    <span className="footer__text">made by Alina Punko</span>
                    <span className="footer__text">2020</span>
                </footer>
            </>
        );
    }
}
