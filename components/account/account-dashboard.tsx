import React from 'react';

function AccountDashboard(props) {
    return (
        <>
            <div className="col-md-8 col-lg-9">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel"
                         aria-labelledby="tab-dashboard-link">
                        <p>Hello <span
                            className="font-weight-normal text-dark">User</span> (not <span
                            className="font-weight-normal text-dark">User</span>? <a href="#">Log
                            out</a>)
                            <br/>
                            From your account dashboard you can view your <a href="#tab-orders"
                                                                             className="tab-trigger-link link-underline">recent
                                orders</a>, manage your <a href="#tab-address"
                                                           className="tab-trigger-link">shipping and
                                billing addresses</a>, and <a href="#tab-account"
                                                              className="tab-trigger-link">edit your
                                password and account details</a>.</p>
                    </div>

                    <div className="tab-pane fade" id="tab-orders" role="tabpanel"
                         aria-labelledby="tab-orders-link">
                        <p>No order has been made yet.</p>
                        <a href="category.html"
                           className="btn btn-outline-primary-2"><span>GO SHOP</span><i
                            className="icon-long-arrow-right"></i></a>
                    </div>

                    <div className="tab-pane fade" id="tab-downloads" role="tabpanel"
                         aria-labelledby="tab-downloads-link">
                        <p>No downloads available yet.</p>
                        <a href="category.html"
                           className="btn btn-outline-primary-2"><span>GO SHOP</span><i
                            className="icon-long-arrow-right"></i></a>
                    </div>

                    <div className="tab-pane fade" id="tab-address" role="tabpanel"
                         aria-labelledby="tab-address-link">
                        <p>The following addresses will be used on the checkout page by default.</p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card card-dashboard">
                                    <div className="card-body">
                                        <h3 className="card-title">Billing
                                            Address</h3>

                                        <p>User Name<br/>
                                            User Company<br/>
                                            John str<br/>
                                            New York, NY 10001<br/>
                                            1-234-987-6543<br/>
                                            <a href="https://portotheme.com/cdn-cgi/l/email-protection"
                                               className="__cf_email__"
                                               data-cfemail="0e77617b7c636f67624e636f6762206d6163">[email&#160;protected]</a><br/>
                                            <a href="#">Edit <i className="icon-edit"></i></a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card card-dashboard">
                                    <div className="card-body">
                                        <h3 className="card-title">Shipping
                                            Address</h3>

                                        <p>You have not set up this type of address yet.<br/>
                                            <a href="#">Edit <i className="icon-edit"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-account" role="tabpanel"
                         aria-labelledby="tab-account-link">
                        <form action="#">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>First Name *</label>
                                    <input type="text" className="form-control" required/>
                                </div>

                                <div className="col-sm-6">
                                    <label>Last Name *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                            </div>

                            <label>Display Name *</label>
                            <input type="text" className="form-control" required/>
                            <small className="form-text">This will be how your name will be
                                displayed in the account section and in reviews</small>

                            <label>Email address *</label>
                            <input type="email" className="form-control" required/>

                            <label>Current password (leave blank to leave unchanged)</label>
                            <input type="password" className="form-control"/>

                            <label>New password (leave blank to leave unchanged)</label>
                            <input type="password" className="form-control"/>

                            <label>Confirm new password</label>
                            <input type="password" className="form-control mb-2"/>

                            <button type="submit"
                                    className="btn btn-outline-primary-2">
                                <span>SAVE CHANGES</span>
                                <i className="icon-long-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountDashboard;