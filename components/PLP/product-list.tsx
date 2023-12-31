import React from 'react';
import FilterToolbox from "@components/PLP/filter-toolbox";
import Pagination from "@components/pagination";

function ProductList() {
    return (

        <>
            <div className="products mb-3">
                <div className="product product-list">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <figure className="product-media">
                                <span className="product-label label-new">New</span>
                                <a href="product.html">
                                    <img src="/assets/images/products/product-4.jpg" alt="Product image"
                                         className="product-image"/>
                                </a>
                            </figure>
                        </div>

                        <div className="col-6 col-lg-3 order-lg-last">
                            <div className="product-list-action">
                                <div className="product-price">
                                    $60.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: '20%'}}
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 2 Reviews )</span>
                                </div>

                                <div className
                                         ="product-action">
                                    <a href="popup/quickView.html" className="btn-product btn-quickview"
                                       title="Quick view"><span>quick view</span></a>
                                    <a href="#" className="btn-product btn-compare"
                                       title="Compare"><span>compare</span></a>
                                </div>

                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="product-body product-action-inner">
                                <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                <div className="product-cat">
                                    <a href="#">Women</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil
                                    skirt</a></h3>

                                <div className="product-content">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                        hendrerit. Pellentesque </p>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="/assets/images/products/product-4-thumb.jpg" alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/products/product-4-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>

                                    <a href="#">
                                        <img src="/assets/images/products/product-4-3-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;