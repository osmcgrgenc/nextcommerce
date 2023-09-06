import BreadcrumbBanner from '@components/banner/breadcrumb-banner';
import React from 'react';
import BreadcrumbText from "@components/newBreadcrumb/breadcrumb-text";
import BlogSidebar from '@components/blog/blog-sidebar';
import BlogItem from "@components/blog/blog-item";
import Pagination from "@components/pagination";

function Blog(props) {
    return (
        <>
            <main className="main">
                <BreadcrumbBanner/>
                <BreadcrumbText>

                </BreadcrumbText>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <BlogItem/>
                                <BlogItem/>
                                <BlogItem/>
                                <BlogItem/>

                                <Pagination/>
                            </div>

                            <BlogSidebar/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Blog;