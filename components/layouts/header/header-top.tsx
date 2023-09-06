import React from 'react';
import styles from '@store/containers/layout/header/header.module.css';
function    HeaderTop() {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <p>Special collection already available.</p><a href="#">&nbsp;Read more ...</a>
                </div>

                <div className="header-right">

                    <ul className="top-menu">
                        <li>
                            <a href="#">Links</a>
                            <ul>
                                <li>
                                    <div className="header-dropdown">
                                        <a href="#">USD</a>
                                        <div className="header-menu">
                                            <ul>
                                                <li><a href="#">Eur</a></li>
                                                <li><a href="#">Usd</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="header-dropdown">
                                        <a href="#">English</a>
                                        <div className="header-menu">
                                            <ul>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">French</a></li>
                                                <li><a href="#">Spanish</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default HeaderTop;