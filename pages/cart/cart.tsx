import React from 'react';
import BreadcrumbBanner from "@components/banner/breadcrumb-banner";
import BreadcrumbText from "@components/newBreadcrumb/breadcrumb-text";
import CartItem from '@components/cart/cart-item';
import SummaryCart from '@components/cart/summary-cart';

function Cart() {
    return (
        <main className="main">
            <BreadcrumbBanner/>
            <BreadcrumbText>

            </BreadcrumbText>

            <div className="page-content">
                <div className="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <table className="table table-cart table-mobile">
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    <CartItem/>
                                    <CartItem/>
                                    </tbody>
                                </table>

                                <div className="cart-bottom">
                                    <div className="cart-discount">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="form-control" required
                                                       placeholder="coupon code"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-primary-2" type="submit"><i
                                                        className="icon-long-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <a href="#" className="btn btn-outline-dark-2"><span>UPDATE CART</span><i
                                        className="icon-refresh"></i></a>
                                </div>
                            </div>
                            <SummaryCart />
                        </div>
                    </div>
                </div>
            </div>
        </main>
);
}

export default Cart;