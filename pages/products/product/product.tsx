import React from 'react';
import BannerText from "@components/banner/product-pager";
import RecommendedProductSlider from "@components/PDP/recommended-product-slider";
import ProductPager from "@components/banner/product-pager";
import BreadcrumbText from "@components/newBreadcrumb/breadcrumb-text";
import ProductDetailsTop from "@components/PDP/product-details-top";
import ProductDetailsTab from "@components/PDP/product-details-tab";

function Product(props) {
    return (
        <>
            <main className="main">
                <BreadcrumbText>
                    <ProductPager/>
                </BreadcrumbText>

                <div className="page-content">
                    <div className="container">
                        <ProductDetailsTop />

                        <ProductDetailsTab />

                        <RecommendedProductSlider/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Product;