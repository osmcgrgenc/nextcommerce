import React, { useState } from 'react';
import BreadcrumbBanner from "@components/banner/breadcrumb-banner";
import FilterSidebar from '@components/filter-sidebar';
import FilterToolbox from "@components/PLP/filter-toolbox";
import ProductList from "@components/PLP/product-list";
import Product2Cols from "@components/PLP/product-2-cols";
import Product3Cols from "@components/PLP/product-3-cols";
import Product4Cols from "@components/PLP/product-4-cols";
import Pagination from "@components/pagination";
import BreadcrumbText from "@components/newBreadcrumb/breadcrumb-text";

function Products(props) {
    const [layout, setLayout] = useState('3-cols');

    const renderLayout = () => {
        switch (layout) {
            case 'list':
                return <ProductList />;
            case '2-cols':
                return <Product2Cols />;
            case '3-cols':
                return <Product3Cols />;
            case '4-cols':
                return <Product4Cols />;
            default:
                return <ProductList />;
        }
    };

    return (
        <>
            <main className="main">
                <BreadcrumbBanner />
                <BreadcrumbText>

                </BreadcrumbText>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <FilterToolbox layout={layout} setLayout={setLayout} />
                                {renderLayout()}
                                <Pagination/>

                            </div>
                            <FilterSidebar />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Products;
