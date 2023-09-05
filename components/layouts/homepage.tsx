import React from 'react';

function HomePage() {
    return (
        <main className="main">
            <div className="intro-slider-container">
                <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl"
                     data-owl-options='{"nav": false}'>
                    <div className="intro-slide">
                        <div className="container intro-content">
                            <h3 className="intro-subtitle">Bedroom Furniture</h3>
                            <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                            <a href="category.html" className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                        <img src="/assets/images/demos/demo-2/slider/slide-3.jpg" alt="Slide Image" className="w-full h-full object-cover" />
                    </div>

                    <div className="intro-slide">
                        <div className="container intro-content">
                            <h3 className="intro-subtitle">Bedroom Furniture</h3>
                            <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                            <a href="category.html" className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                        <img src="/assets/images/demos/demo-2/slider/slide-3.jpg" alt="Slide Image" className="w-full h-full object-cover" />
                    </div>

                    <div className="intro-slide">
                        <div className="container intro-content">
                            <h3 className="intro-subtitle">Bedroom Furniture</h3>
                            <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                            <a href="category.html" className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                        <img src="/assets/images/demos/demo-2/slider/slide-3.jpg" alt="Slide Image" className="w-full h-full object-cover" />
                    </div>
                </div>

                <span className="slider-loader text-white"></span>
            </div>

            <div className="brands-border owl-carousel owl-simple" data-toggle="owl"
                 data-owl-options='{
                    "nav": false,
                    "dots": false,
                    "margin": 0,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":2
                        },
                        "420": {
                            "items":3
                        },
                        "600": {
                            "items":4
                        },
                        "900": {
                            "items":5
                        },
                        "1024": {
                            "items":6
                        },
                        "1360": {
                            "items":7
                        }
                    }
                }'>
                <a href="#" className="brand">
                    <img src="/assets/images/brands/1.png" alt="Brand Name"/>
                </a>

                <a href="#" className="brand">
                    <img src="/assets/images/brands/2.png" alt="Brand Name"/>
                </a>

                <a href="#" className="brand">
                    <img src="/assets/images/brands/3.png" alt="Brand Name"/>
                </a>

                <a href="#" className="brand">
                    <img src="/assets/images/brands/4.png" alt="Brand Name"/>
                </a>

                <a href="#" className="brand">
                    <img src="/assets/images/brands/5.png" alt="Brand Name"/>
                </a>

                <a href="#" className="brand">
                    <img src="/assets/images/brands/6.png" alt="Brand Name"/>
                </a>

                <a href="#" className="brand">
                    <img src="/assets/images/brands/7.png" alt="Brand Name"/>
                </a>
            </div>

            <div className="mb-3 mb-lg-5"></div>

            <div className="banner-group">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="banner banner-large banner-overlay banner-overlay-light">
                                <a href="#">
                                    <img src="/assets/images/demos/demo-2/banners/banner-1.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-top">
                                    <h4 className="banner-subtitle">Clearence</h4>
                                    <h3 className="banner-title">Coffee Tables</h3>
                                    <div className="banner-text">from $19.99</div>
                                    <a href="#" className="btn btn-outline-gray banner-link">Shop Now<i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="banner banner-overlay">
                                <a href="#">
                                    <img src="/assets/images/demos/demo-2/banners/banner-2.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-bottom">
                                    <h4 className="banner-subtitle text-grey">On
                                        Sale</h4>
                                    <h3 className="banner-title text-white">Amazing <br />Armchairs
                                    </h3>
                                    <div className="banner-text text-white">from $39.99</div>
                                    <a href="#" className="btn btn-outline-white banner-link">Discover Now<i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="banner banner-overlay">
                                <a href="#">
                                    <img src="/assets/images/demos/demo-2/banners/banner-3.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-top">
                                    <h4 className="banner-subtitle text-grey">New
                                        Arrivals</h4>
                                    <h3 className="banner-title text-white">Storage <br />Boxes & Baskets
                                    </h3>
                                    <a href="#" className="btn btn-outline-white banner-link">Discover Now<i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="banner banner-overlay banner-overlay-light">
                                <a href="#">
                                    <img src="/assets/images/demos/demo-2/banners/banner-4.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-top">
                                    <h4 className="banner-subtitle">On Sale</h4>
                                    <h3 className="banner-title">Lamps Offer</h3>
                                    <div className="banner-text">up to 30% off</div>
                                    <a href="#" className="btn btn-outline-gray banner-link">Shop Now<i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3"></div>

            <div className="container">
                <ul className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="products-featured-link" data-toggle="tab"
                           href="#products-featured-tab" role="tab" aria-controls="products-featured-tab"
                           aria-selected="true">Featured</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="products-sale-link" data-toggle="tab"
                           href="#products-sale-tab"
                           role="tab" aria-controls="products-sale-tab" aria-selected="false">On Sale</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="products-top-link" data-toggle="tab"
                           href="#products-top-tab"
                           role="tab" aria-controls="products-top-tab" aria-selected="false">Top Rated</a>
                    </li>
                </ul>
            </div>

            <div className="container-fluid">
                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="products-featured-tab" role="tabpanel"
                         aria-labelledby="products-featured-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>
                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-1-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-1-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>
                                    </h3>
                                    <div className="product-price">
                                        $251,00
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-2-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-2-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Octo 4240</a>
                                    </h3>
                                    <div className="product-price">
                                        $746,00
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active"
                                            // style="background: #1f1e18;"
                                        ><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#"
                                            // style="background: #e8e8e8;"
                                        ><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-3-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-3-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a>
                                    </h3>
                                    <div className="product-price">
                                        $970,00
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-4-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-4-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="new-price">$337,00</span>
                                        <span className="old-price">Was $449,00</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active"
                                            // style="background: #878883;"
                                        ><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#"
                                            // style="background: #dfd5c2;"
                                        ><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>
                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-5-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-5-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Petite Table Lamp</a>
                                    </h3>
                                    <div className="product-price">
                                        $675,00
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active"
                                            // style="background: #74543e;"
                                        ><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#"
                                            // style="background: #e8e8e8;"
                                        ><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-6-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-6-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Elephant Armchair</a>
                                    </h3>
                                    <div className="product-price">
                                        $457,00
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-1-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-1-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>
                                    </h3>
                                    <div className="product-price">
                                        $251,00
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="products-sale-tab" role="tabpanel"
                         aria-labelledby="products-sale-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>
                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-5-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-5-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Petite Table Lamp</a>
                                    </h3>
                                    <div className="product-price">
                                        $675,00
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active"
                                            // style="background: #74543e;"
                                        ><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#"
                                            // style="background: #e8e8e8;"
                                        ><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-6-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-6-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Elephant Armchair</a>
                                    </h3>
                                    <div className="product-price">
                                        $457,00
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>

                            <div className="product product-11 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/products/product-1-1.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="/assets/images/demos/demo-2/products/product-1-2.jpg"
                                             alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>
                                    </h3>
                                    <div className="product-price">
                                        $251,00
                                    </div>
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="products-top-tab" role="tabpanel"
                         aria-labelledby="products-top-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5"></div>

            <div className="bg-light deal-container pt-5 pb-3 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="deal">
                                <div className="deal-content">
                                    <h4>Limited Quantities</h4>
                                    <h2>Deal of the Day</h2>

                                    <h3 className="product-title"><a href="product.html">POÄNG</a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="new-price">$149.00</span>
                                        <span className="old-price">Was $240.00</span>
                                    </div>

                                    <div className="deal-countdown" data-until="+10h"></div>

                                    <a href="product.html" className="btn btn-primary">
                                        <span>Shop Now</span><i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                                <div className="deal-image">
                                    <a href="product.html">
                                        <img src="/assets/images/demos/demo-2/deal/product-1.jpg" alt="image"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div
                                className="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
                                <a href="#">
                                    <img src="/assets/images/demos/demo-2/banners/banner-5.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-top banner-content-center">
                                    <h4 className="banner-subtitle">The Best
                                        Choice</h4>
                                    <h3 className="banner-title">AGEN</h3>
                                    <div className="banner-text text-primary">$49.99</div>
                                    <a href="#" className="btn btn-outline-gray banner-link">Shop Now<i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6"></div>

            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Top Selling Products</h2>

                    <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="top-all-link" data-toggle="tab"
                               href="#top-all-tab"
                               role="tab" aria-controls="top-all-tab" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="top-fur-link" data-toggle="tab" href="#top-fur-tab"
                               role="tab" aria-controls="top-fur-tab" aria-selected="false">Furniture</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="top-decor-link" data-toggle="tab" href="#top-decor-tab"
                               role="tab" aria-controls="top-decor-tab" aria-selected="false">Decoration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="top-light-link" data-toggle="tab" href="#top-light-tab"
                               role="tab" aria-controls="top-light-tab" aria-selected="false">Lighting</a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content">
                    <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel"
                         aria-labelledby="top-all-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-10-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-10-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Carronade Large
                                                Suspension Lamp</a></h3>
                                            <div className="product-price">
                                                $401,00
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active"
                                                    // style="background: #e8e8e8;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                                <a href="#"
                                                    // style="background: #333333;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                            </div>

                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-10-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-10-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Carronade Large
                                                Suspension Lamp</a></h3>
                                            <div className="product-price">
                                                $401,00
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active"
                                                    // style="background: #e8e8e8;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                                <a href="#"
                                                    // style="background: #333333;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                            </div>

                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-11-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-11-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Decor</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Original
                                                Outdoor
                                                Beanbag</a></h3>
                                            <div className="product-price">
                                                $259,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-14-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-14-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Decor</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Cushion Set 3
                                                Pieces</a></h3>
                                            <div className="product-price">
                                                $199,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="top-fur-tab" role="tabpanel"
                         aria-labelledby="top-fur-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-circle label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-9-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-9-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Furniture</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Garden
                                                Armchair</a>
                                            </h3>
                                            <div className="product-price">
                                                <span className="new-price">$94,00</span>
                                                <span className="old-price">Was $94,00</span>
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-circle label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-9-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-9-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Furniture</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Garden
                                                Armchair</a>
                                            </h3>
                                            <div className="product-price">
                                                <span className="new-price">$94,00</span>
                                                <span className="old-price">Was $94,00</span>
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="top-decor-tab" role="tabpanel"
                         aria-labelledby="top-decor-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-8-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-8-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Decor</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Madra Log
                                                Holder</a></h3>
                                            <div className="product-price">
                                                $401,00
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active"
                                                    // style="background: #333333;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                                <a href="#"
                                                    // style="background: #927764;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                            </div>

                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-11-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-11-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Decor</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Original
                                                Outdoor
                                                Beanbag</a></h3>
                                            <div className="product-price">
                                                $259,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-11-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-11-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Decor</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Original
                                                Outdoor
                                                Beanbag</a></h3>
                                            <div className="product-price">
                                                $259,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-11-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-11-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Decor</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Original
                                                Outdoor
                                                Beanbag</a></h3>
                                            <div className="product-price">
                                                $259,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="top-light-tab" role="tabpanel"
                         aria-labelledby="top-light-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-7-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-7-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Petite Table
                                                Lamp</a></h3>
                                            <div className="product-price">
                                                $401,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-10-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-10-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Carronade Large
                                                Suspension Lamp</a></h3>
                                            <div className="product-price">
                                                $401,00
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active"
                                                    // style="background: #e8e8e8;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                                <a href="#"
                                                    // style="background: #333333;"
                                                ><span
                                                    className="sr-only">Color name</span></a>
                                            </div>

                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="/assets/images/demos/demo-2/products/product-16-1.jpg"
                                                     alt="Product image" className="product-image"/>
                                                <img
                                                    src="/assets/images/demos/demo-2/products/product-16-2.jpg"
                                                    alt="Product image" className="product-image-hover"/>
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Carronade Table
                                                Lamp</a></h3>
                                            <div className="product-price">
                                                $499,00
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            <a href="#"
                                               className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr className="mt-1 mb-6"/>
            </div>

            <div className="blog-posts">
                <div className="container">
                    <h2 className="title text-center">From Our Blog</h2>

                    <div className="owl-carousel owl-simple carousel-with-shadow" data-toggle="owl"
                         data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "600": {
                                    "items":2
                                },
                                "992": {
                                    "items":3
                                }
                            }
                        }'>
                        <article className="entry entry-display">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/demos/demo-2/blog/post-1.jpg" alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body text-center">
                                <div className="entry-meta">
                                    <a href="#">Nov 22, 2018</a>, 0 Comments
                                </div>

                                <h3 className="entry-title">
                                    <a href="single.html">Sed adipiscing ornare.</a>
                                </h3>

                                <div className="entry-content">
                                    <a href="single.html" className="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </article>
                        <article className="entry entry-display">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/demos/demo-2/blog/post-1.jpg" alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body text-center">
                                <div className="entry-meta">
                                    <a href="#">Nov 22, 2018</a>, 0 Comments
                                </div>

                                <h3 className="entry-title">
                                    <a href="single.html">Sed adipiscing ornare.</a>
                                </h3>

                                <div className="entry-content">
                                    <a href="single.html" className="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </article>
                        <article className="entry entry-display">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/demos/demo-2/blog/post-1.jpg" alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body text-center">
                                <div className="entry-meta">
                                    <a href="#">Nov 22, 2018</a>, 0 Comments
                                </div>

                                <h3 className="entry-title">
                                    <a href="single.html">Sed adipiscing ornare.</a>
                                </h3>

                                <div className="entry-content">
                                    <a href="single.html" className="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div className="more-container text-center mt-2">
                        <a href="blog.html"
                           className="btn btn-outline-darker btn-more"><span>View more articles</span><i
                            className="icon-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;