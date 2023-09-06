import React from 'react';
import Link from 'next/link';
import styles from '@store/containers/layout/header/header.module.css';

function HeaderBottom() {
    return (
        <div className="header-bottom sticky-header">
            <div className="container">
                <div className="header-left">
                    <div className="dropdown category-dropdown">
                        <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" data-display="static"
                           title="Browse Categories">
                            Browse Categories
                        </a>

                        <div className="dropdown-menu">
                            <nav className="side-nav">
                                <ul className="menu-vertical sf-arrows">
                                    <li className="item-lead"><a href="#">Daily offers</a></li>
                                    <li className="item-lead"><a href="#">Gift Ideas</a></li>
                                    <li><a href="#">Beds</a></li>
                                    <li><a href="#">Lighting</a></li>
                                    <li><a href="#">Sofas & Sleeper sofas</a></li>
                                    <li><a href="#">Storage</a></li>
                                    <li><a href="#">Armchairs & Chaises</a></li>
                                    <li><a href="#">Decoration </a></li>
                                    <li><a href="#">Kitchen Cabinets</a></li>
                                    <li><a href="#">Coffee & Tables</a></li>
                                    <li><a href="#">Outdoor Furniture </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="header-center">
                    <nav className="main-nav">
                        <ul className="menu sf-arrows">
                            <li className="megamenu-container active">
                                <a href="index.html" className="sf-with-ul">Home</a>

                                <div className="megamenu demo">
                                    <div className="menu-col">
                                        <div className="menu-title">Choose your demo</div>


                                        <div className="megamenu-action text-center">
                                            <a href="#"
                                               className="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i
                                                className="icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="category.html" className="sf-with-ul">Shop</a>

                                <div className="megamenu megamenu-md">
                                    <div className="row no-gutters">
                                        <div className="col-md-8">
                                            <div className="menu-col">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="menu-title">Shop with sidebar</div>
                                                        <ul>
                                                            <li><a href="category-list.html">Shop List</a>
                                                            </li>
                                                            <li><a href="category-2cols.html">Shop Grid 2
                                                                Columns</a></li>
                                                            <li><a href="category.html">Shop Grid 3
                                                                Columns</a>
                                                            </li>
                                                            <li><a href="category-4cols.html">Shop Grid 4
                                                                Columns</a></li>
                                                            <li><a href="category-market.html"><span>Shop Market<span
                                                                className="tip tip-new">New</span></span></a>
                                                            </li>
                                                        </ul>

                                                        <div className="menu-title">Shop no sidebar</div>
                                                        <ul>
                                                            <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span
                                                                className="tip tip-hot">Hot</span></span></a>
                                                            </li>
                                                            <li><a href="category-fullwidth.html">Shop
                                                                Fullwidth
                                                                No Sidebar</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="menu-title">Product Category</div>
                                                        <ul>
                                                            <li><a href="product-category-boxed.html">Product
                                                                Category Boxed</a></li>
                                                            <li><a
                                                                href="product-category-fullwidth.html"><span>Product Category Fullwidth<span
                                                                className="tip tip-new">New</span></span></a>
                                                            </li>
                                                        </ul>
                                                        <div className="menu-title">Shop Pages</div>
                                                        <ul>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="dashboard.html">My Account</a></li>
                                                            <li><a href="#">Lookbook</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="banner banner-overlay">
                                                <a href="category.html" className="banner banner-menu">
                                                    <img src="/assets/images/menu/banner-1.jpg"
                                                         alt="Banner"/>

                                                    <div className="banner-content banner-content-top">
                                                        <div
                                                            className="banner-title text-white">Last <br />Chance<span><strong>Sale</strong></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="product.html" className="sf-with-ul">Product</a>

                                <div className="megamenu megamenu-sm">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="menu-col">
                                                <div className="menu-title">Product Details</div>
                                                <ul>
                                                    <li><a href="product.html">Default</a></li>
                                                    <li><a href="product-centered.html">Centered</a></li>
                                                    <li><a
                                                        href="product-extended.html"><span>Extended Info<span
                                                        className="tip tip-new">New</span></span></a></li>
                                                    <li><a href="product-gallery.html">Gallery</a></li>
                                                    <li><a href="product-sticky.html">Sticky Info</a></li>
                                                    <li><a href="product-sidebar.html">Boxed With
                                                        Sidebar</a>
                                                    </li>
                                                    <li><a href="product-fullwidth.html">Full Width</a></li>
                                                    <li><a href="product-masonry.html">Masonry Sticky
                                                        Info</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="banner banner-overlay">
                                                <a href="category.html">
                                                    <img src="/assets/images/menu/banner-2.jpg"
                                                         alt="Banner"/>

                                                    <div
                                                        className="banner-content banner-content-bottom">
                                                        <div className="banner-title text-white">New
                                                            Trends<br /><span><strong>spring 2019</strong></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="sf-with-ul">Pages</a>

                                <ul>
                                    <li>
                                        <a href="about.html" className="sf-with-ul">About</a>

                                        <ul>
                                            <li><a href="about.html">About 01</a></li>
                                            <li><a href="about-2.html">About 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="sf-with-ul">Contact</a>

                                        <ul>
                                            <li><a href="contact.html">Contact 01</a></li>
                                            <li><a href="contact-2.html">Contact 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html" className="sf-with-ul">Blog</a>

                                <ul>
                                    <li><a href="blog.html">Classic</a></li>
                                    <li><a href="blog-listing.html">Listing</a></li>
                                    <li>
                                        <a href="#">Grid</a>
                                        <ul>
                                            <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                            <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                            <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                            <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Masonry</a>
                                        <ul>
                                            <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                            <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                            <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                            <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Mask</a>
                                        <ul>
                                            <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                            <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Single Post</a>
                                        <ul>
                                            <li><a href="single.html">Default with sidebar</a></li>
                                            <li><a href="single-fullwidth.html">Fullwidth no sidebar</a>
                                            </li>
                                            <li><a href="single-fullwidth-sidebar.html">Fullwidth with
                                                sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="elements-list.html" className="sf-with-ul">Elements</a>

                                <ul>
                                    <li><a href="elements-products.html">Products</a></li>
                                    <li><a href="elements-typography.html">Typography</a></li>
                                    <li><a href="elements-titles.html">Titles</a></li>
                                    <li><a href="elements-banners.html">Banners</a></li>
                                    <li><a href="elements-product-category.html">Product Category</a></li>
                                    <li><a href="elements-video-banners.html">Video Banners</a></li>
                                    <li><a href="elements-buttons.html">Buttons</a></li>
                                    <li><a href="elements-accordions.html">Accordions</a></li>
                                    <li><a href="elements-tabs.html">Tabs</a></li>
                                    <li><a href="elements-testimonials.html">Testimonials</a></li>
                                    <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                    <li><a href="elements-portfolio.html">Portfolio</a></li>
                                    <li><a href="elements-cta.html">Call to Action</a></li>
                                    <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
                </p>
                </div>
            </div>
        </div>

    );
}

export default HeaderBottom;