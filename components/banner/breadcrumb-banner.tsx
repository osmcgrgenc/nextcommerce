import React from 'react';

function BreadcrumbBanner(props) {
    return (
        <>

            <div className="page-header text-center"
                 style={{backgroundImage: "url('/assets/images/page-header-bg.jpg')"}}>
                <div className="container">
                    <h1 className="page-title">Blog Classic<span>Blog</span></h1>
                </div>
            </div>

        </>
    );
}

export default BreadcrumbBanner;