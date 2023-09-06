import React from 'react';
import BreadcrumbBanner from "@components/banner/breadcrumb-banner";
import BreadcrumbText from "@components/newBreadcrumb/breadcrumb-text";
import BlogSidebar from "@components/blog/blog-sidebar";
import BlogDetailItem from '@components/blog/blog-detail-item';

function BlogDetail(props) {
    return (
        <>
            <main className="main">
                <BreadcrumbBanner/>
                <BreadcrumbText>

                </BreadcrumbText>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <BlogDetailItem />

                            <BlogSidebar/>
                        </div>
                    </div>
                </div>
            </main>
        </>
);
}

export default BlogDetail;