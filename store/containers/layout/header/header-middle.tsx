import React from 'react';
import './header.module.css';
import styles from './header.module.css';

function HeaderMiddle() {
    return (
        <div className={styles['header-middle']}>
            <div className={styles.container}>
                <div className={styles['header-left']}>
                    <button className={styles['mobile-menu-toggler']}>
                        <span className={styles['sr-only']}>Toggle mobile menu</span>
                        <i className={styles['icon-bars']}></i>
                    </button>

                    <a href="index.html" className={styles['logo']}>
                        <img src="assets/images/demos/demo-2/logo.png" alt="Molla Logo" width="105"
                             height="25"/>
                    </a>
                </div>

                <div className={styles['header-center']}>
                    <div
                        className={`${styles['header-search']} ${styles['header-search-extended']} ${styles['header-search-visible']} ${styles['header-search-no-radius']} hidden lg:block`}>
                        <a href="#" className={styles['search-toggle']} role="button"><i
                            className="icon-search"></i></a>
                        <form action="#" method="get">
                            <div className={`${styles['header-search-wrapper']} ${styles['search-wrapper-wide']}`}>
                                <label htmlFor="q" className="sr-only">Search</label>
                                <input type="search" className={`form-control ${styles['form-control']}`} name="q"
                                       id="q" placeholder="Search product ..." required/>
                                <button className={`btn btn-primary ${styles['btn-primary']}`} type="submit">
                                    <i className="icon-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`${styles['header-right']} h-[100px]`}>
                    <div className={styles.account}>
                        <a href="dashboard.html" title="My account">
                            <div className={styles.icon}>
                                <i className="icon-user"></i>
                            </div>
                            <p>Account</p>
                        </a>
                    </div>

                    <div className={styles.wishlist}>
                        <a href="wishlist.html" title="Wishlist">
                            <div className={styles.icon}>
                                <i className="icon-heart-o"></i>
                                <span className={`${styles['wishlist-count']} badge`}>3</span>
                            </div>
                            <p>Wishlist</p>
                        </a>
                    </div>


                    <div className={`${styles.dropdown} ${styles['cart-dropdown']}`}>
                        <a href="#" className={`${styles['dropdown-toggle']}`} role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" data-display="static">
                            <div className={`${styles.icon}`}>
                                <i className={`${styles['icon-shopping-cart']}`}></i>
                                <span className={`${styles['cart-count']} ${styles['badge']}`}>2</span>
                            </div>
                            <p>Cart</p>
                        </a>

                        <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-right']}`}>
                            <div className={`${styles['dropdown-cart-products']}`}>
                                <div className={`${styles.product}`}>
                                    <div className={`${styles['product-cart-details']}`}>
                                        <h4 className={`${styles['product-title']}`}>
                                            <a href="product.html">Beige knitted elastic runner shoes</a>
                                        </h4>
                                        <span className={`${styles['cart-product-info']}`}>
            <span className={`${styles['cart-product-qty']}`}>1</span>
            x $84.00
          </span>
                                    </div>
                                    <figure className={`${styles['product-image-container']}`}>
                                        <a href="product.html" className={`${styles['product-image']}`}>
                                            <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                        </a>
                                    </figure>
                                    <a href="#" className={`${styles['btn-remove']}`} title="Remove Product"><i
                                        className={`${styles['icon-close']}`}></i></a>
                                </div>

                                <div className={`${styles.product}`}>
                                    <div className={`${styles['product-cart-details']}`}>
                                        <h4 className={`${styles['product-title']}`}>
                                            <a href="product.html">Blue utility pinafore denim dress</a>
                                        </h4>
                                        <span className={`${styles['cart-product-info']}`}>
            <span className={`${styles['cart-product-qty']}`}>1</span>
            x $76.00
          </span>
                                    </div>
                                    <figure className={`${styles['product-image-container']}`}>
                                        <a href="product.html" className={`${styles['product-image']}`}>
                                            <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                        </a>
                                    </figure>
                                    <a href="#" className={`${styles['btn-remove']}`} title="Remove Product"><i
                                        className={`${styles['icon-close']}`}></i></a>
                                </div>
                            </div>

                            <div className={`${styles['dropdown-cart-total']}`}>
                                <span>Total</span>
                                <span className={`${styles['cart-total-price']}`}>$160.00</span>
                            </div>

                            <div className={`${styles['dropdown-cart-action']}`}>
                                <a href="cart.html" className={`${styles['btn']} ${styles['btn-primary']}`}>View
                                    Cart</a>
                                <a href="checkout.html"
                                   className={`${styles['btn']} ${styles['btn-outline-primary-2']}`}>
                                    <span>Checkout</span><i className={`${styles['icon-long-arrow-right']}`}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMiddle;