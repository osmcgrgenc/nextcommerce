import React from 'react';
import ProductPager from "@components/banner/product-pager";

function BreadcrumbText({children}) {
    return (
        <>
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container d-flex align-items-center">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                    </ol>

                    {children}
                </div>
            </nav>
        </>
    );
}

export default BreadcrumbText;