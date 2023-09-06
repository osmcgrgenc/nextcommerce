import React from 'react';
import BreadcrumbBanner from "@components/banner/breadcrumb-banner";
import BreadcrumbText from "@components/newBreadcrumb/breadcrumb-text";
import AccountSidebar from "@components/account/account-sidebar";
import AccountDashboard from "@components/account/account-dashboard";

function Account(props) {
    return (
        <>
            <main className="main">
                <BreadcrumbBanner/>
                <BreadcrumbText>

                </BreadcrumbText>

                <div className="page-content">
                    <div className="dashboard">
                        <div className="container">
                            <div className="row">
                                <AccountSidebar/>
                                <AccountDashboard />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
);
}

export default Account;