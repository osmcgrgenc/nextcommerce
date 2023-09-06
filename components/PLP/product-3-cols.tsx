import React from 'react';
import Pagination from "@components/pagination";
import FilterToolbox from "@components/PLP/filter-toolbox";

function Product3Cols({children}: any) {
    return (
        <>

            <div className="products mb-3">
                <div className="row justify-content-center">
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <span className="product-label label-new">New</span>
                                <a href="product.html">
                                    <img src="assets/images/products/product-4.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Women</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Brown paperbag
                                    waist pencil skirt</a></h3>
                                <div className="product-price">
                                    $60.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "20%"}}
                                            // style="width: 20%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 2 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-4-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-4-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>

                                    <a href="#">
                                        <img src="assets/images/products/product-4-3-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg"
                                         alt="Product image" className="product-image"/>
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html"
                                       className="btn-product-icon btn-quickview"
                                       title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare"
                                       title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#"
                                       className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Dresses</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Dark yellow
                                    lace cut out swing dress</a></h3>
                                <div className="product-price">
                                    $84.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: "0%"}}
                                            // style="width: 0%;"
                                        ></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-5-thumb.jpg"
                                             alt="product desc"/>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-5-2-thumb.jpg"
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

export default Product3Cols;