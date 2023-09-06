import React from 'react';
import MainBanner from "@components/banner/main-banner";
import Brands from "@components/home/brands";
import ProductBanner from "@components/banner/product-banner";
import TabList from "@components/tab-list";
import ProductSlider from "@components/home/product-slider";
import BlogPosts from "@components/home/blog-posts";

function HomePage() {
    return (
        <main className="main">
            <MainBanner/>

            <Brands/>

            <div className="mb-3 mb-lg-5"></div>


            <div className="mb-3"></div>
            <TabList/>
            <ProductSlider/>
            <div className="mb-5"></div>
            <ProductBanner/>


            <div className="mb-6"></div>
            <h2 className="title text-center mb-2">Top Selling Products</h2>
            <TabList/>
            <ProductSlider/>

            <div className="container">
                <hr className="mt-1 mb-6"/>
            </div>
            <BlogPosts/>

        </main>
    );
}

export default HomePage;