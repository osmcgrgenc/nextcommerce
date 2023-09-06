import React from 'react';

function HeaderMiddle() {
    return (
        <div className="header-middle">
            <div className="container">
                <div className="header-left">
                    <button className="mobile-menu-toggler">
                        <span className="sr-only">Toggle mobile menu</span>
                        <i className="icon-bars"></i>
                    </button>

                    <a href="index.html" className="logo">
                        <img src="/assets/images/demos/demo-2/logo.png" alt="Molla Logo" width="105"
                             height="25"/>
                    </a>
                </div>

                <div className="header-center">
                    <div
                        className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                        <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                        <form action="#" method="get">
                            <div className="header-search-wrapper search-wrapper-wide">
                                <label htmlFor="q" className="sr-only">Search</label>
                                <input type="search" className="form-control" name="q" id="q"
                                       placeholder="Search product ..." required/>
                                <button className="btn btn-primary" type="submit"><i
                                    className="icon-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="header-right">
                    <div className="account">
                        <a href="dashboard.html" title="My account">
                            <div className="icon">
                                <i className="icon-user"></i>
                            </div>
                            <p>Account</p>
                        </a>
                    </div>

                    <div className="wishlist">
                        <a href="wishlist.html" title="Wishlist">
                            <div className="icon">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count badge">3</span>
                            </div>
                            <p>Wishlist</p>
                        </a>
                    </div>

                    <div className="dropdown cart-dropdown">
                        <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" data-display="static">
                            <div className="icon">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                            </div>
                            <p>Cart</p>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-cart-products">
                                <div className="product">
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <a href="product.html">Beige knitted elastic runner shoes</a>
                                        </h4>

                                        <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <a href="product.html" className="product-image">
                                            <img src="/assets/images/products/cart/product-1.jpg"
                                                 alt="product"/>
                                        </a>
                                    </figure>
                                    <a href="#" className="btn-remove" title="Remove Product"><i
                                        className="icon-close"></i></a>
                                </div>

                                <div className="product">
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <a href="product.html">Blue utility pinafore denim dress</a>
                                        </h4>

                                        <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <a href="product.html" className="product-image">
                                            <img src="/assets/images/products/cart/product-2.jpg"
                                                 alt="product"/>
                                        </a>
                                    </figure>
                                    <a href="#" className="btn-remove" title="Remove Product"><i
                                        className="icon-close"></i></a>
                                </div>
                            </div>

                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">$160.00</span>
                            </div>

                            <div className="dropdown-cart-action">
                                <a href="cart.html" className="btn btn-primary">View Cart</a>
                                <a href="checkout.html"
                                   className="btn btn-outline-primary-2"><span>Checkout</span><i
                                    className="icon-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMiddle;