import React from 'react';
import styles from  './header.module.css';
function    HeaderTop() {
    return (
        <div className={styles['header-top']}>
            <div className={styles.container}>
                <div className={styles['header-left']}>
                    <p>Special collection already available.</p>
                    <a href="#">&nbsp;Read more ...</a>
                </div>

                <div className={styles['header-right']}>

                    <ul className={styles['top-menu']}>
                        <li>
                            <a href="#">Links</a>
                            <ul>
                                <li>
                                    <div className={styles['header-dropdown']}>
                                        <a href="#">USD</a>
                                        <div className={styles['header-menu']}>
                                            <ul>
                                                <li><a href="#">Eur</a></li>
                                                <li><a href="#">Usd</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles['header-dropdown']}>
                                        <a href="#">English</a>
                                        <div className={styles['header-menu']}>
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